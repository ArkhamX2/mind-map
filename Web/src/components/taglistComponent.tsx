import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TagComponent: FC = () => {
        return (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ margin: '10px', width: '620px', height: '52px', backgroundColor: '#EEEFFF', borderRadius: '5px', display: 'flex', alignItems: 'center'
                                , justifySelf:'start'
                         }}>
                                <div style={{margin:'0px 10px'}}>Название тега</div>
                        </div>
                        <div style={{ margin: '10px', width: '320px', height: '52px', backgroundColor: '#BCFF95', borderRadius: '5px', display: 'flex', alignItems: 'center'
                                , justifySelf:'end'
                         }}>
                                <div style={{margin:'0px 10px'}}>Уровень 1</div>
                        </div>
                </div>

        )
}

export default TagComponent