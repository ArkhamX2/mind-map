import axios, { AxiosError } from "axios";
import { FC, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

const Profile: FC = () => {
    return (
        <main style={{ backgroundColor: "#F5F5F5" }}>
            <div style={{margin:'0 160px'}}>
                <div className="profileinfo" style={{ width: "100%", height: '100%', display: "flex", flexDirection: 'row' }}>
                    <div className="logo" style={{ width: '300px', height: '300px', backgroundColor: 'lightgray', borderRadius: '15px', margin:'10px 15px' }}>
                    </div>
                    <div className="descrcontainer" style={{margin:'10px'}}>
                        <div className="name" style={{margin:'10px'}}><h2>Имя Фамилия</h2></div>
                        <div className="descr" style={{margin:'15px 10px', backgroundColor:'#EEEFFF', width:'800px', height:"240px", borderRadius:'5px'}}>
                            <div className="label" style={{margin:"10px", padding:'5px'}}><h3>О себе:</h3></div>
                            Текст
                        </div>
                    </div>
                </div>
                <div className="tagscontainer"  style={{ width: "100%", height: '100%', display: "flex", flexDirection: 'column', padding:'10px' }}>
                    <div className="label" style={{margin:'5px 0'}}><h2>Теги</h2></div>
                    <div className="taglist" style={{border:'2px solid lightgray', width:"1130px", height:"400px"}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            Объект <br/>
                            Объект <br/>
                            Объект <br/>
                            Объект <br/>
                        </div>
                        <button style={{width:'150px', height:'38px'}}>текст</button>
                    </div>
                </div>
                <div className="mapcontainer" style={{width: "100%", height: '100%', display: "flex", flexDirection: 'column', padding:'10px'}}>
                    <div className="label" style={{margin:'5px 0'}}><h2>Карта знаний</h2></div>
                    <div style={{display:'flex', height:'600px', width:'1130px', border:'2px solid lightgray' }}></div>
                </div>
            </div>
        </main>
    )
}

export default Profile