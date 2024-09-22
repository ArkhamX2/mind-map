import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from '../styles/login.module.css'

const Navbar: FC = () => {
    const navigate = useNavigate()

    return (
        <header style={{
            display: 'flex', border: '2px solid lightgray', padding: '5px', color: '#371F76', alignSelf: 'flex-start', position: 'fixed',
            backgroundColor: "#EBEBFF", width: '100%'
        }}>
            <Link className={classes.Navigation} to='/profile'>
                Профиль</Link>
            <Link className={classes.Navigation} to='/agregator'>
                Обучение</Link>
            <Link className={classes.Navigation} to='/projects'>
                Проекты</Link>
            <Link className={classes.Navigation} to='/login'>
                Войти</Link>
            <Link className={classes.Navigation} to='/registration'>
                Зарегистрироваться</Link>
        </header>

    )
}

export default (Navbar)