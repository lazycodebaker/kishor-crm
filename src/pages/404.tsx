
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
    
    const navigate = useNavigate()

    return (
        <div className='w-screen h-screen flex items-center justify-center flex-col'>
            <h1 className='text-2xl font-bold'>404 Not Found</h1>
            <button onClick={() => navigate(-1)} className='text-blue-600 py-2 px-4 font-semibold'>Go Back To Home </button>
        </div>
    )
}

export default ErrorPage