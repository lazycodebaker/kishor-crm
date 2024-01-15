
import LOGO from '../../assets/logo.png'
import { BLUE } from "../../constant"

import GOOGLE_LOGO from '../../assets/icons/google_logo.png'
import GITHUB_LOGO from '../../assets/icons/github_logo.png'
import TWITTER_LOGO from '../../assets/icons/twitter_logo.png'

import { useNavigate } from 'react-router-dom'

const SignIn: React.FC = () => {

    const navigation = useNavigate()

    return (
        <section className="w-full h-screen flex">
            <div style={{
                backgroundColor: BLUE
            }} className="w-full h-full lg:flex hidden items-center justify-center">
                <img src={LOGO} alt="logo" className="object-cover w-1/2" />
            </div>
            <div className="bg-gray-100 w-full h-full flex items-center justify-center lg:py-20 py-12">

                <div className="bg-white w-[80%] p-4 h-full">

                    <div className='text-start px-4 py-4 space-y-1'>
                        <h1 className="text-xl font-bold">Sign In</h1>
                        <p>Enter your email and password to login</p>
                    </div>

                    <div className="px-4 py-2">
                        <p className='py-1 text-sm'>Email</p>
                        <input placeholder='Enter Email' className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none" type="email" />
                    </div>

                    <div className="px-4 py-2">
                        <p className='py-1 text-sm'>Password</p>
                        <input placeholder='Enter Password' className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none" type="password" />
                    </div>

                    <div className="px-4 py-2 flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" />
                            <p className='text-sm'> Subscribe to weekly newsletter</p>
                        </div>
                    </div>

                    <div className="p-4 w-full">
                        <button style={{
                            backgroundColor: BLUE
                        }} className="w-full py-2 text-sm text-white rounded-md font-bold">
                            SignIn
                        </button>
                    </div>

                    <div className='flex items-center space-x-4 py-4'>
                        <div className="w-full h-[2px] bg-gray-300"></div>
                        <p>OR</p>
                        <div className="w-full h-[2px] bg-gray-300"></div>
                    </div>

                    <div className='w-full flex items-center py-4 justify-center space-x-4'>

                        <div className='flex items-center bg-gray-200 cursor-pointer rounded-md px-4 py-1 space-x-2'>
                            <img src={GOOGLE_LOGO} alt="google_logo" className="w-6 h-6 object-cover" />
                            <p className='text-sm'>Google</p>
                        </div>

                        <div className='flex items-center bg-gray-200 cursor-pointer rounded-md px-4 py-1 space-x-2'>
                            <img src={GITHUB_LOGO} alt="GITHUB_LOGO" className="w-6 h-6 object-cover" />
                            <p className='text-sm'>Github</p>
                        </div>

                        <div className='flex items-center bg-gray-200 cursor-pointer rounded-md px-4 py-1 space-x-2'>
                            <img src={TWITTER_LOGO} alt="TWITTER_LOGO" className="w-6 h-6 object-cover" />
                            <p className='text-sm'>Twitter</p>
                        </div>
                        
                    </div>

                    <div className='w-full text-center text-sm p-2 cursor-pointer' onClick={()=>{
                        navigation('/auth/register')
                    }}>
                        <p>Dont' have an account ? <span style={{ color: BLUE }}>Register</span></p>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default SignIn