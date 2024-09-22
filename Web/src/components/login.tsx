import axios, { AxiosError } from "axios";
import { FC, useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from "../utility/hooks";
import classes from '../styles/login.module.css'

const Login: FC = () => {
        const dispatch = useAppDispatch()
        const navigate = useNavigate();
        const [data, setData] = useState({
                email: "",
                password: "",
        });
        const [errorText, setErrorText] = useState<string>("");
        const login = () => {
                axios.post("http://127.0.0.1:8000/security/login/", {
                        withCredentials: true,
                        email: data.email,
                        password: data.password
                }).then((res) => {
                        setErrorText("")
                        console.log("Server response: ", res);
                        //Cookies.set('trains_cookie', res.data.access);
                        var lastURL = localStorage.getItem("lastURL")
                        if (lastURL != undefined) {
                                navigate(lastURL)
                        }
                        else {
                                navigate("/")
                        }
                }).catch((err) => {
                        console.log("Server respondend with error: ", err);
                        switch (err.status) {
                                case 400:
                                        setData({ ...data, password: "" })
                                        setErrorText("Введена неверная почта/пароль")
                                        break
                        }
                })
        }
        return (
                <main style={{ backgroundColor: "#FFFFFF", width: '100%', height: '100%', padding: "15px", display: 'flex' }}>
                        <div className="container" style={{
                                alignSelf: 'center', display: 'flex', marginTop: '80px', flexDirection: 'column', width: '100%', alignItems: 'center'
                        }}>
                                <div style={{ width: '520px', height: '500px', backgroundColor: '#F3F3F8', display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '50px', padding: '10px', borderRadius: '12px' }}>
                                        <div className="header" style={{ display: 'flex' }}>
                                                <div className="text" style={{ fontSize: '28px', margin: '10px' }}>Вход</div>
                                        </div>

                                        <div style={{ padding: '50px 50px' }} >
                                                <div className={classes.InputCon}>
                                                        <div className={classes.Text}>Логин</div>
                                                        <input className={classes.Input} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder=" Логин" type="email"></input>
                                                </div>
                                                <div className={classes.InputCon}>
                                                        <div className={classes.Text}>Пароль</div>
                                                        <input className={classes.Input} value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} placeholder=" Пароль" type="password"></input>
                                                </div>

                                        </div>
                                        <div>
                                                {errorText != "" ?
                                                        <>
                                                                <label style={{ color: 'red' }}>{errorText}</label>
                                                        </>
                                                        :
                                                        <>

                                                        </>}
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <button onClick={() => login()} style={{ backgroundColor: 'transparent', color: '#06146C', fontSize: '24px', border: '0px solid transparent', marginTop: '10px' }}>Очистить</button>
                                                <button className={classes.Button} onClick={() => navigate("/registration")}>Применить</button>
                                        </div>
                                </div>

                        </div>
                </main>
        )
}

export default Login