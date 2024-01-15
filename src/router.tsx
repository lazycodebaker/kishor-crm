
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import App from './App'
import EmailTemplate from './pages/Settings/EmailTemplate/EmailTemplate'
import Token from './pages/Token'
import SignIn from './pages/Auth/SignIn'
import Register from './pages/Auth/Register'
import ValidateAdmission from './pages/Admission/ValidateAdmission'
import ErrorPage from './pages/404'
import Automation from './pages/Automation'
import ITReport from './pages/AutomationReport/ITReport/ITReport'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'settings/email-template',
        element: <EmailTemplate />
    },
    {
        path : "settings/automation/logs",
        element : <Automation />
    },
    {
        path: "token/:token",
        element: <Token />
    },
    {
        path: '/auth/login',
        element: <SignIn />,
    },
    {
        path: '/auth/register',
        element: <Register />
    },
    {
        path: "/validate/admission",
        element: <ValidateAdmission />
    },
    {
        path: '*',
        element : <ErrorPage />
    },
    {
        path : "automation/it-report",
        element : <ITReport />
    }
])


const Router: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="settings/email-template" element={<EmailTemplate />} />
                <Route path="settings/automation/logs" element={<Automation />} />
                <Route path="token/:token" element={<Token />} />
                <Route path="/auth/login" element={<SignIn />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/validate/admission" element={<ValidateAdmission />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="automation/it-report" element={<ITReport />} />
            </Routes>
        </>

    )
}

export default Router

/*

http://localhost:3000

http://localhost:3000/settings/email-template

http://localhost:3000/settings/automation/logs

http://localhost:3000/auth/login

http://localhost:3000/auth/register

http://localhost:3000/*

http://localhost:3000/automation/it-report

http://localhost:3000/validate/admission

http://localhost:3000/token/telegram

http://localhost:3000/token/easebuzz

http://localhost:3000/token/cc-avenue

http://localhost:3000/token/paytm-gateway

http://localhost:3000/token/keka

http://localhost:3000/token/wati-api

http://localhost:3000/token/interkt-api

http://localhost:3000/token/kit-19


*/