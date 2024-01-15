import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"

import WHATSAPP_LOGO from '../assets/icons/whatsapp_logo.png'
import TELEGRAM_LOGO from '../assets/icons/telegram_logo.png'
import EMAIL_LOGO from '../assets/icons/gmail_logo.png'
import SMS_LOGO from '../assets/icons/sms_logo.png'
import ZOOM_LOGO from '../assets/icons/zoom_logo.png'
import MEETING_LOGO from '../assets/icons/meet_logo.png'

const Cards = [
    {
        img: WHATSAPP_LOGO,
        title: "WhatsApp"
    },
    {
        img: TELEGRAM_LOGO,
        title: "Telegram"
    },
    {
        img: EMAIL_LOGO,
        title: "Email"
    },
    {
        img: SMS_LOGO,
        title: "SMS"
    },
    {
        img: ZOOM_LOGO,
        title: "Zoom"
    },
    {
        img: MEETING_LOGO,
        title: "Meeting"
    },
]

const AutomationContent: React.FC = () => {
    return (
        <div className="p-4 bg-gray-100 w-full h-screen">
            <h1 className="text-base font-semibold">Automation Logs</h1>

            <div className="w-full flex flex-wrap lg:px-8 my-8 px-4">

                {Cards.map((card, index) => <div key={index} className="bg-white m-4 flex flex-col w-48 h-24 cursor-pointer rounded-md hover:shadow-md items-center justify-center mr-4">
                    <img src={card.img} alt={card.title} className="w-12" />
                    <h1>{card.title}</h1>
                </div>)}

            </div>

        </div>
    )
}

const Automation: React.FC = () => {
    return (
        <>
            <Navbar />
            <main
                style={{
                    height: 'calc(100vh - 113px)'
                }}
                className="w-full flex ">
                <Sidebar />

                <AutomationContent />
            </main>
        </>
    )
}

export default Automation