import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from '../styles/login.module.css'
import FilterTag from './filtertag'

const Filter: FC = () => {
    return (
        <div style={{width:'400px', height:'480px'}}>
                <div>
                        <div style={{display:'flex', flexDirection:'row', padding:'5px', margin:'5px'}}>
                                <input className={classes.Input} style={{width:'320px'}}></input>
                                <div>Поиск</div>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', padding:'5px', margin:'5px', overflowY:'auto'}}>
                                <FilterTag></FilterTag>
                                <FilterTag></FilterTag>
                                <FilterTag></FilterTag>
                                <FilterTag></FilterTag>
                                <FilterTag></FilterTag>
                        </div>
                        <div style={{display:'flex', flexDirection:'row'}}>
                                <button className={classes.button}></button>
                                <button className={classes.button}></button>
                        </div>

                </div>
        </div>
    )
}

export default Filter