import axios, { AxiosError } from "axios";
import { FC, useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import TagComponent from "../components/taglistComponent"
import MindNetwork from "../components/mindNetwork"
import { course, courseTag } from "../types";
import { Edge, Node, Data } from "vis-network/standalone/esm/vis-network";
import useModal from "../utility/useModal";
import Modal from "./modal";

const TagColors = [
    `AliceBlue`,
    `AntiqueWhite`,
    `Aqua`,
    `Aquamarine`,
    `Azure`,
    `Beige`,
    `Bisque`,
    `Black`,
    `BlanchedAlmond`,
    `Blue`,
    `BlueViolet`,
    `Brown`,
    `BurlyWood`,
    `CadetBlue`,
    `Chartreuse`,
    `Chocolate`,
    `Coral`,
    `CornflowerBlue`,
    `Cornsilk`,
    `Crimson`,
    `Cyan`,
    `DarkBlue`,
    `DarkCyan`,
    `DarkGoldenRod`,
    `DarkGray`,
    `DarkGrey`,
    `DarkGreen`,
    `DarkKhaki`,
    `DarkMagenta`,
    `DarkOliveGreen`,
    `Darkorange`,
    `DarkOrchid`,
    `DarkRed`,
    `DarkSalmon`,
    `DarkSeaGreen`,
    `DarkSlateBlue`,
    `DarkSlateGray`,
    `DarkSlateGrey`,
    `DarkTurquoise`,
    `DarkViolet`,
    `DeepPink`,
    `DeepSkyBlue`,
    `DimGray`,
    `DimGrey`,
    `DodgerBlue`,
    `FireBrick`,
    `FloralWhite`,
    `ForestGreen`,
    `Fuchsia`,
    `Gainsboro`,
    `GhostWhite`,
    `Gold`,
    `GoldenRod`,
    `Gray`,
    `Grey`,
    `Green`,
    `GreenYellow`,
    `HoneyDew`,
    `HotPink`,
    `IndianRed`,
    `Indigo`,
    `Ivory`,
    `Khaki`,
    `Lavender`,
    `LavenderBlush`,
    `LawnGreen`,
    `LemonChiffon`,
    `LightBlue`,
    `LightCoral`,
    `LightCyan`,
    `LightGoldenRodYellow`,
    `LightGray`,
    `LightGrey`,
    `LightGreen`,
    `LightPink`,
    `LightSalmon`,
    `LightSeaGreen`,
    `LightSkyBlue`,
    `LightSlateGray`,
    `LightSlateGrey`,
    `LightSteelBlue`,
    `LightYellow`,
    `Lime`,
    `LimeGreen`,
    `Linen`,
    `Magenta`,
    `Maroon`,
    `MediumAquaMarine`,
    `MediumBlue`,
    `MediumOrchid`,
    `MediumPurple`,
    `MediumSeaGreen`,
    `MediumSlateBlue`,
    `MediumSpringGreen`,
    `MediumTurquoise`,
    `MediumVioletRed`,
    `MidnightBlue`,
    `MintCream`,
    `MistyRose`,
    `Moccasin`,
    `NavajoWhite`,
    `Navy`,
    `OldLace`,
    `Olive`,
    `OliveDrab`,
    `Orange`,
    `OrangeRed`,
    `Orchid`,
    `PaleGoldenRod`,
    `PaleGreen`,
    `PaleTurquoise`,
    `PaleVioletRed`,
    `PapayaWhip`,
    `PeachPuff`,
    `Peru`,
    `Pink`,
    `Plum`,
    `PowderBlue`,
    `Purple`,
    `Red`,
    `RosyBrown`,
    `RoyalBlue`,
    `SaddleBrown`,
    `Salmon`,
    `SandyBrown`,
    `SeaGreen`,
    `SeaShell`,
    `Sienna`,
    `Silver`,
    `SkyBlue`,
    `SlateBlue`,
    `SlateGray`,
    `SlateGrey`,
    `Snow`,
    `SpringGreen`,
    `SteelBlue`,
    `Tan`,
    `Teal`,
    `Thistle`,
    `Tomato`,
    `Turquoise`,
    `Violet`,
    `Wheat`,
    `White`,
    `WhiteSmoke`,
    `Yellow`,
    `YellowGreen`,
]

const createMindNerworkProps = (courses: course[], courseTags: courseTag[]): Data => {
    var nodes: Node[] = []
    var edges: Edge[] = []

    courseTags.map((tag) => {
        nodes.push({ id: tag.id, widthConstraint: {minimum:50, maximum:200}, label: tag.tag_name, level: tag.level, group: "tag", shape: "circle" })
        if (tag.course_id && tag.course_id.length > 0)
            tag.course_id.map((id) => {
                var course = courses.find((course) => course.id == id)
                if (course != undefined) {
                    var localCourseId = course.id! * -1
                    var node = nodes.find((node) => node.id == localCourseId)
                    // color: TagColors[TagColors.length%(tag.id!+5)]
                    if (node == undefined)
                        nodes.push({ label: course.name, widthConstraint: {minimum:50, maximum:200},id: localCourseId, group: "course", shape: "circle" })
                    // color edge if course not ended yet by user
                    edges.push({ from: tag.id, to: localCourseId })
                }
            })
    })
    var mindProps: Data = {
        nodes,
        edges
    }
    return mindProps
}

const initCourseData = [
    {
        id: 1,
        name: "Краткий курс математика Краткий курс математика Краткий курс математика Краткий курс математика Краткий курс математика"
    },
    {
        id: 2,
        name: "Чики чики"
    },
    {
        id: 3,
        name: "Как стать умником"
    },
    {
        id: 4,
        name: "Разбор автоматов"
    }
]

const initCourseTagData = [
    {
        id: 1,
        course_id: [2, 1, 3],
        tag_name: "Дифуры",
        level: 10
    },
    {
        id: 2,
        course_id: [2, 3, 4],
        tag_name: "Автоматы",
        level: 12
    },
]

const Profile: FC = () => {
    const [selectedNode, setSelectedNode] = useState<number>()
    const [courseData, setCourseData] = useState([...initCourseData])
    const [courseTagData, setCourseTagData] = useState([...initCourseTagData])
    const { isOpen, toggle } = useModal()

    useEffect(() => {
        if (selectedNode != undefined) {
            if (selectedNode > 0)
            {
                setCourseTagData([...initCourseTagData.filter((tag)=>tag.id==selectedNode)])
                setCourseData([...initCourseData])
            }
            else
            {
                setCourseTagData([...initCourseTagData.filter((tag)=>tag.course_id.find((id)=>id==selectedNode*-1)!=undefined)])
                setCourseData([...initCourseData.filter((course)=>course.id==selectedNode*-1)])
            }
        }
        else
        {
            setCourseData([...initCourseData])
            setCourseTagData([...initCourseTagData])
        }
    }, [selectedNode])

    const getSelectedNode = (nodeId?: number) => {
        setSelectedNode(nodeId)
        if (nodeId == undefined)
            return undefined
        return nodeId
    }
    return (
        <main style={{ backgroundColor: "#FFFFFF", width: '100%', height: '100%', padding: "15px" }}>
            <Modal isOpen={isOpen} toggle={toggle}>
                TEST
            </Modal>
            <div style={{overflowY:'auto', display:'flex', flexDirection:'column', width: '100%', height: '100%'}}>
                <div className="profileinfo" style={{display: "flex", flexDirection: 'row', marginTop:'70px', alignSelf:'center' }}>
                    <div className="logo" style={{ width: '300px', height: '300px', backgroundColor: 'lightgray', borderRadius: '15px', margin: '10px 15px' }}>
                    </div>
                    <div className="descrcontainer" style={{ margin: '10px', alignSelf:'center' }}>
                        <div className="name" style={{ margin: '10px' }}><h2>Имя Фамилия</h2></div>
                        <div className="descr" style={{ margin: '15px 10px', backgroundColor: '#EEEFFF', width: '800px', height: "240px", borderRadius: '5px' }}>
                            <div className="label" style={{ margin: "5px 5px", padding: '5px' }}><h3>О себе:</h3></div>
                            <textarea style={{ margin: '0px 5px', padding: '0 5px', width: '97%', height: '78%', backgroundColor: '#EEEFFF', border: '0px #EEEFFF', outlineWidth: '0', resize: 'none', fontSize:'18px'
                                , color:'#06146C', textDecoration:'#06146C'
                             }}></textarea>
                        </div>
                    </div>
                </div>
                <div className="tagscontainer" style={{ width: "100%", height: '100%', display: "flex", flexDirection: 'column', padding: '10px', alignItems:'center'  }}>
                    <div className="label" style={{ margin: '5px 0' }}><h2>Теги</h2></div>
                    <div className="taglist" style={{ border: '2px solid lightgray', width: "1130px", height: "400px", overflowY: 'auto' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <TagComponent />
                            <TagComponent />
                            <TagComponent />
                            <TagComponent />
                            <TagComponent />
                            <TagComponent />
                            <TagComponent />
                            <TagComponent />
                        </div>
                    </div>
                    <button style={{
                        width: '240px', height: '48px', justifySelf: 'center', margin: '10px', backgroundColor: '#7D83FF', color: 'white'
                        , border: '0px solid transparent', borderRadius: '10px'
                    }} onClick={toggle}>Добавить</button>
                </div>
                <div className="mapcontainer" style={{ width: "100%", height: '100%', display: "flex", flexDirection: 'column', padding: '10px', alignItems:'center' }}>
                    <div className="label" style={{ margin: '5px 0' }}><h2>Карта знаний</h2></div>
                    <div style={{ display: 'flex', height: '600px', width: '1130px', border: '2px solid lightgray' }}>
                        <MindNetwork props={{ data: createMindNerworkProps(courseData, courseTagData), callback: getSelectedNode }} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Profile