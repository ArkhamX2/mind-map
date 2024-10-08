import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AgrCard: FC = () => {
        return (
                <div className="card" style={{ display: 'flex', width: '650px', height: '610px', backgroundColor: '#F3F3F8', flexDirection: 'column', padding: '15px', borderRadius: '10px', margin: '5px' }}>
                        <div className="image" style={{
                                backgroundColor: 'lightgray', width: '100%', height: '330px', minHeight: '330px',
                                margin: '0 0 10px 0', borderRadius: '10px', alignContent: 'center'
                        }}>
                                <img src="/images/card_image1.png" alt="Изборанжение" />
                        </div>
                        <div className="Text" style={{ fontSize: "28px" }}>
                                Супер-курсы по вторжению в Африку и покорению Питона. Подойдет для тех, кто ничего не смыслит в ....</div>
                        <div className='tagscontainer'>
                                <div style={{
                                        height: '32px', backgroundColor: '#EBEBFF', display: 'inline-block', padding: '0 15px', textAlign: 'center', borderRadius: '10px',
                                        fontSize: '20px', fontWeight: '400', margin: '5px'
                                }}>тэг</div>
                        </div>
                        <div className="button">
                                <button style={{
                                        width: '100%', height: '48px', margin: '5px 0', border: '0px transparent', backgroundColor: "#7D83FF",
                                        borderRadius: '10px', color: 'white', fontSize: '22px'
                                }}>ПОДРОБНЕЕ...</button>
                        </div>
                </div>

        )
}

export default AgrCard