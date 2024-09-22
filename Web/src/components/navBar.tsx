import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar: FC = () => {
    const navigate = useNavigate()

    return (
        <header style={{ display: 'flex', border: '2px solid lightgray', padding: '5px', color: '#371F76', alignSelf: 'flex-start', position:'fixed',
         backgroundColor:"#EBEBFF", width:'100%' }}>
            <Link style={{ margin: '5px 10px', padding: '5px', textAlign: 'center', fontSize: '28px', textDecoration: 'none' }} to='/login'>
                Войти</Link>
            <Link style={{ margin: '5px 10px', padding: '5px', textAlign: 'center', fontSize: '28px', textDecoration: 'none' }} to='/registration'>
                Зарегистрироваться</Link>
            <Link style={{ margin: '5px 10px', padding: '5px', textAlign: 'center', fontSize: '28px', textDecoration: 'none' }} to='/agregator'>
                Обучение</Link>
            <Link style={{ margin: '5px 10px', padding: '5px', textAlign: 'center', fontSize: '28px', textDecoration: 'none' }} to='/profile'>
                Профиль</Link>
            <Link style={{ margin: '5px 10px', padding: '5px', textAlign: 'center', fontSize: '28px', textDecoration: 'none' }} to='/projects'>
                Проекты</Link>
        </header>

    )
}

export default (Navbar)