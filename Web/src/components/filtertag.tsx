import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from '../styles/login.module.css'

const FilterTag: FC = () => {
    return (
        <div style={{width:'380spx', height:'42px', padding:'5px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div style={{fontSize:'24px'}}>Название тега</div>
                <div style={{width:'30px', height:'30px', border:'4px solid #8787C7'}}>Галочка</div>
        </div>
    )
}

export default FilterTag