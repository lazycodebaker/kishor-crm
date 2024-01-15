
import { BLUE } from "../constant"

import SEARCH_ICON from '../assets/navbar/search.png'
import NOTIFICATION_BELL_ICON from '../assets/navbar/notification_bell.png'
import AVATAR_ICON from '../assets/navbar/user_avatar.png'
import { Link } from "react-router-dom"

const Navbar : React.FC = () => {
    return (
        <nav style={{
            backgroundColor : BLUE
        }}
         className="h-24 px-8 w-screen flex items-center justify-between">

            <Link to={'/'} className="w-full">
                <h1 className="text-xl font-semibold text-white">LOGO</h1>
            </Link >
            
            <div className="w-full h-full hidden md:flex items-center justify-center">
                <div className="relative w-full">
                    <img src={SEARCH_ICON} alt="search icon" className="absolute top-[11px] left-2" />
                    <input type="text" placeholder="Search" className="border-2 w-full border-gray-300 rounded-full px-8 placeholder:pl-2 py-2 font-semibold placeholder:font-medium focus:outline-none focus:border-blue-500" />
                </div>
            </div>

            <div className="h-full w-full flex items-center">
                <div className="flex items-center justify-end w-full space-x-4">
                    <img src={NOTIFICATION_BELL_ICON} alt="notification bell icon" className="w-8" />

                    <div className="rounded-full w-10 h-10 flex items-center justify-center">
                        <img src={AVATAR_ICON} alt="avatar icon" className="w-full h-full rounded-full" />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar