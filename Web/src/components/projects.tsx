import axios, { AxiosError } from "axios";
import { FC, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import AgrCard from "../components/agrCard"
import CardInfo from "./cardInfo";

const Projects: FC = () => {
    return (
        <main style={{ backgroundColor: "#FFFFFF", width: '100%', height: '100%', padding: "15px" }}>
            <div style={{display:'flex', flexDirection:'column', width: '100%', height: '100%'}}>
                <div className="searchcontainer" style={{ display: "flex", flexDirection: 'column', marginTop:'60px', alignSelf:'center' }}>
                    <div style={{display:"inline-flex", backgroundColor:'#EBEBFF', alignSelf:'center', padding:'5px', margin:'5px 5px 10px 5px', justifyContent:'space-between', width:'360px', height:'42px', borderRadius:'10px' }}>
                        <div style={{fontSize:'24px', marginLeft:'5px'}} >Мои проекты </div>
                        <div style={{fontSize:'24px', marginRight:'5px'}}> Другие</div>
                    </div>
                    <div className="searchbarcontainer" style={{ display: 'inline-flex', justifyContent: 'space-between', alignSelf:'center' }}>
                        <div className="searchbar" style={{ justifySelf: 'start' }}>
                            <input type="text" style={{
                                width: '800px', height: '56px', borderRadius: '10px', backgroundColor: '#F5F5F5',
                                fontSize: '28px'
                            }}></input>
                        </div>
                        <div style={{display:'inline-flex'}}>
                            <div className="searchButton" style={{ width: '56px', height: '56px', backgroundColor: '#EBEBFF', margin:'0 10px', textAlign:'center', borderRadius:'10px' }}>Поиск</div>
                            <div className="filterbutton" style={{ width: '56px', height: '56px', backgroundColor: '#EBEBFF', borderRadius:'10px'  }}>Фильтр</div>
                        </div>

                    </div>
                    <div className="tagscontainer" style={{ display: 'flex', flexDirection: 'row', alignSelf:'center' }}>
                    <div style={{
                                        height: '32px', backgroundColor: '#EBEBFF', display: 'inline-block', padding: '0 15px', textAlign: 'center', borderRadius: '10px',
                                        fontSize:'20px', fontWeight:'400', margin:'5px'}}>тэг</div>
                    </div>
                </div>
                <div className="cardContainer" style={{ display: 'grid', overflowY: 'auto', gridTemplateColumns: '1fr 1fr', columnGap: '10px', alignSelf:'center' }}>
                    <CardInfo></CardInfo>
                    <CardInfo></CardInfo>
                    <AgrCard></AgrCard>
                    <AgrCard></AgrCard>
                    <AgrCard></AgrCard>
                </div>
            </div>
        </main>
    )
}

export default Projects