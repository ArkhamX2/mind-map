import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar: FC = () => {
    const navigate = useNavigate()

    return (
        <div style={{display:'flex',border:'2px solid lightgray',padding:'5px', color:'#371F76', alignSelf:'flex-start'}}>
                    <Link  style={{margin:'5px', border:'2px solid lightgray',padding:'5px', width:'120px', textAlign:'center', fontSize:'14px'}} to='/login'>
                    login</Link>
                    <Link style={{margin:'5px', border:'2px solid lightgray',padding:'5px', width:'120px', textAlign:'center', fontSize:'14px'}} to='/registration'>
                    registration</Link>                    
                    <Link style={{margin:'5px', border:'2px solid lightgray',padding:'5px', width:'120px', textAlign:'center', fontSize:'14px'}} to='/agregator'>
                        agregator</Link>
                    <Link style={{margin:'5px', border:'2px solid lightgray',padding:'5px', width:'120px', textAlign:'center', fontSize:'14px'}} to='/profile'>
                    profile</Link>     
        </div>

    )
}

export default (Navbar)