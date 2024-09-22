import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CardInfo: FC = () => {
        return (
                <div className="card" style={{
                        display: 'flex', width: '650px', height: '1300px', backgroundColor: '#F3F3F8', flexDirection: 'column',
                        padding: '15px', borderRadius: '10px', margin: '5px', overflowY: 'auto'
                }}>
                        <div className="image" style={{ backgroundColor: 'lightgray', width: '100%', height: '70%', margin: '0 0 10px 0', borderRadius: '10px' }}></div>
                        <div className="Text" style={{ fontSize: "28px" }}>Абиоба боба фактор я крутецкий мэйн актор по локации прошлеся трактор в рейд поше лне оценив времени</div>
                        <div className='tagscontainer'>
                                <div style={{
                                        height: '32px', backgroundColor: '#EBEBFF', display: 'inline-block', padding: '0 15px', textAlign: 'center', borderRadius: '10px',
                                        fontSize: '20px', fontWeight: '400', margin: '5px'
                                }}>тэг</div>
                        </div>
                        <div className="button"><button style={{
                                width: '100%', height: '48px', margin: '5px 0', border: '0px transparent', backgroundColor: "#7D83FF",
                                borderRadius: '10px', color: 'white', fontSize: '22px'
                        }}>Просмотр</button></div>
                        <div>
                                <div className='comments'>
                                        <div>Коменнтарии</div>
                                        <div> коментарий 1</div>
                                        <div style={{display:'flex', flexDirection:'row'}}>
                                                <input></input>
                                                <div>Отправить</div>
                                        </div>


                                </div>
                        </div>
                </div>

        )
}

export default CardInfo