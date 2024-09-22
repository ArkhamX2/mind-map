import axios, { AxiosError } from "axios";
import { FC, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import classes from '../styles/login.module.css'

const Registration: FC = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password1: "",
        password2: "",
    });
    const [errorText, setErrorText] = useState<string>("");
    const register = () => {
        if (data.email == "" || data.password1 == "" || data.password2 == "") {
            setErrorText("Не все поля заполнены")
        }
        else {
            axios.post("http://127.0.0.1:8000/security/registration/", {
                email: data.email,
                password1: data.password1,
                password2: data.password2,
                withCredentials: true,
            }).then((res) => {
                setErrorText("")
                console.log("Server response: ", res);
                var lastURL = localStorage.getItem("lastURL")
                if (lastURL != undefined) {
                    navigate(lastURL)
                }
                else {
                    navigate("/")
                }
            }).catch((err: AxiosError) => {
                console.log("Server respondend with error: ", err);
                switch (err.status) {
                    case 400:
                        setData({ ...data, password1: "" })
                        setData({ ...data, password2: "" })
                        setErrorText(err.response?.request.response)
                        break
                }
            })
        }
    }
    return (
        <main style={{ backgroundColor: "#FFFFFF", width: '100%', height: '100%', padding: "15px", display: 'flex' }}>
            <div className="container" style={{
                alignSelf: 'center', display: 'flex', marginTop: '80px', flexDirection: 'column', width: '100%', alignItems: 'center'
            }}>
                <div style={{ width: '520px', height: '500px', backgroundColor: '#F3F3F8', display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '50px', padding: '10px', borderRadius: '12px' }}>
                    <div className="header" style={{ display: 'flex' }}>
                        <div className="text" style={{ fontSize: '28px', margin: '10px' }}>Регистрация</div>
                    </div>
                    <div style={{ padding: '0px 50px' }}>
                        <div className={classes.InputCon}>
                            <div className={classes.Text}>Ваш логин</div>
                            <input className={classes.Input} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder=" Логин" type="email"></input>
                        </div>
                        <div className={classes.InputCon}>
                            <div className={classes.Text}>Ваш пароль</div>
                            <input className={classes.Input} value={data.password1} onChange={(e) => setData({ ...data, password1: e.target.value })} placeholder="  Пароль" type="password"></input>
                        </div>
                        <div className={classes.InputCon}>
                            <div className={classes.Text}>Повторите пароль</div>
                            <input className={classes.Input} value={data.password2} onChange={(e) => setData({ ...data, password2: e.target.value })} placeholder=" Повторите пароль" type="password"></input>
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
                        <button className={classes.Button} onClick={() => register()} style={{marginTop:'40px'}}>Зарегистрироваться</button>
                        <button style={{ backgroundColor: 'transparent', color: '#06146C', fontSize: '24px', border: '0px solid transparent', marginTop: '10px' }} onClick={() => navigate("/login")}>Войти</button>
                    </div>
                </div>

            </div>
        </main>

    )
}

export default Registration