import LoginPage from "../pages/loginPage"
import ProfilePage from "../pages/profilePage"
import RegistrationPage from "../pages/registrationPage"
import AgregatorPage from "../pages/agregatorPage"

export const privateRoutes = [
]

export const publicRoutes = [
    { path: '/registration', element: RegistrationPage },
    { path: '/login', element: LoginPage },
    { path: '/agregator', element: AgregatorPage},
    { path: '/profile', element: ProfilePage},
]