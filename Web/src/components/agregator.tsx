import axios, { AxiosError } from "axios";
import { FC, useEffect, useRef, useState } from "react"
import AgrCard from "../components/agrCard"
import { BASE_LINK } from "../../settings";

const Agregator: FC = () => {
    useEffect(() => {
        console.log("FETCH")
        axios.get(BASE_LINK + "api/course/get", {
        }).then((res) => {
            console.log(res)
            axios.get(BASE_LINK + "api/course_tag/get", {
            }).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log("Server respondend with error: ", err);
            })
        }).catch((err) => {
            console.log("Server respondend with error: ", err);
        })
    }, [])
    return (
        <main style={{ backgroundColor: "#FFFFFF", width: '100%', height: '100%', padding: "15px" }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="searchcontainer" style={{ width: "100%", height: '100%', display: "flex", flexDirection: 'column', marginTop: '70px' }}>
                    <div className="searchbarcontainer" style={{ display: 'inline-flex', justifyContent: 'space-between', alignSelf: 'center' }}>
                        <div className="searchbar" style={{ justifySelf: 'start' }}>
                            <input type="text" style={{
                                width: '800px', height: '56px', borderRadius: '10px', backgroundColor: '#F5F5F5',
                                fontSize: '28px'
                            }}></input>
                        </div>
                        <div style={{ display: 'inline-flex' }}>
                            <div className="searchButton" style={{ width: '56px', height: '56px', backgroundColor: '#EBEBFF', margin: '0 10px', textAlign: 'center', borderRadius: '10px' }}>Поиск</div>
                            <div className="filterbutton" style={{ width: '56px', height: '56px', backgroundColor: '#EBEBFF', borderRadius: '10px' }}>Фильтр</div>
                        </div>

                    </div>
                    <div className="tagscontainer" style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
                        <div style={{
                            height: '32px', backgroundColor: '#EBEBFF', display: 'inline-block', padding: '0 15px', textAlign: 'center', borderRadius: '10px',
                            fontSize: '20px', fontWeight: '400', margin: '5px'
                        }}>тэг</div>
                    </div>
                </div>
                <div className="cardContainer" style={{ display: 'grid', overflowY: 'auto', gridTemplateColumns: '1fr 1fr', columnGap: '10px', alignSelf: 'center' }}>
                    <AgrCard></AgrCard>
                    <AgrCard></AgrCard>
                    <AgrCard></AgrCard>
                    <AgrCard></AgrCard>
                    <AgrCard></AgrCard>
                    <AgrCard></AgrCard>
                    <AgrCard></AgrCard>
                    <AgrCard></AgrCard>
                </div>
            </div>
        </main>
    )
}

export default Agregator