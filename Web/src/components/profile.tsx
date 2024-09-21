import axios, { AxiosError } from "axios";
import { FC, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from "../utility/hook";
import { updateUserData } from "../store/userSlice";

const Profile: FC = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
            </div>
            <div className="inputs">
                
            </div>
        </div>
    )
}

export default Profile