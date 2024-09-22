import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from '../../public/images/card_image1.png'

const CardInfo: FC = () => {
        return (
                <div className="card" style={{
                        display: 'flex', width: '640px', height: '100%', maxHeight: '1300px', backgroundColor: '#F3F3F8', flexDirection: 'column',
                        padding: '15px', borderRadius: '10px', margin: '5px', overflowY: 'auto'
                }}>
                        <div className="image" style={{
                                backgroundColor: 'lightgray', width: '100%', height: '330px', minHeight: '330px',
                                margin: '0 0 10px 0', borderRadius: '10px', alignContent: 'center'
                        }}>
                                <img src="/images/card_image1.png" alt="Изборанжение" />
                        </div>
                        <div className="Text" style={{ fontSize: "28px" }}>Абиоба боба фактор я крутецкий мэйн актор по локации прошлеся трактор в рейд поше лне оценив времени</div>
                        <div className='tagscontainer'>
                                <div style={{
                                        height: '32px', backgroundColor: '#EBEBFF', display: 'inline-block', padding: '0 15px', textAlign: 'center', borderRadius: '10px',
                                        fontSize: '20px', fontWeight: '400', margin: '5px'
                                }}>тэг</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                <div className="button"><button style={{
                                        width: '500px', height: '48px', margin: '5px 0', border: '0px transparent', backgroundColor: "#7D83FF",
                                        borderRadius: '10px', color: 'white', fontSize: '22px'
                                }}>Просмотр</button></div>
                                <div className="button"><button style={{
                                        width: '100px', height: '48px', margin: '5px 0', border: '0px transparent', backgroundColor: "#7D83FF",
                                        borderRadius: '10px', color: 'white', fontSize: '22px'
                                }}><img src="/images/like.png" alt="Отпр">
                                        </img>
                                        </button></div>
                        </div>

                        <div>
                                <div className='comments'>
                                        <div style={{ margin: '5px 0px', fontSize: '20px' }}>Коменнтарии:</div>
                                        <div style={{ overflowY: 'auto', display: 'flex', flexDirection: 'row', margin: '10px 20px' }}>
                                                <div style={{ width: '40px', height: '40px', backgroundColor: 'lightgray', borderRadius: '50%', margin: '0px 10px 0px 0px' }}></div>
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <div>Name</div>
                                                        <div style={{ textWrap: 'wrap', overflowY: 'auto', width: '100%' }}>Commenta sddddddddddssaddddddddddddddddddddddddddddddddddddassssssssssssssss</div>
                                                </div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <input style={{ width: '100%', overflowY: 'auto', height: '42px', border: '2px solid #8787C7', borderRadius: '10px' }}></input>
                                                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#7D83FF', padding: '5px', margin: '0px 5px' }}>
                                                <img src="/images/send.png" alt="Отпр">
                                                </img></div>
                                        </div>


                                </div>
                        </div>
                </div>

        )
}

export default CardInfo