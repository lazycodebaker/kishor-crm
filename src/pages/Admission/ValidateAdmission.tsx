
import LOGO from '../../assets/logo.png'
import { BLUE } from '../../constant';
import PHONE_ICON from '../../assets/icons/phone_icon.png'
import EMAIL_ICON from '../../assets/icons/email_icon.png'
import WEB_ICON from '../../assets/icons/web_icon.png'
import PIN_ICON from '../../assets/icons/pin_icon.png'
import React from 'react';

const ValidateAdmission: React.FC = () => {
    return (
        <div className="bg-gray-100 w-full h-screen flex lg:flex-row space-x-4 space-y-4 flex-col lg:justify-around p-16 lg:py-20 py-12">

            <img src={LOGO} alt="logo" className="w-48 h-48" />

            <div className="bg-white w-full max-w-xl p-4 h-full">

                <div className='text-start px-4 py-4 space-y-1'>
                    <h1 className="text-xl font-bold">Validate Admission</h1>
                </div>

                <div className="px-4 py-2">
                    <p className='py-1 text-sm'>Admission No.</p>
                    <input placeholder='Enter Admission No.' className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none" type="email" />
                </div>

                <div className="p-4 w-full">
                    <button style={{
                        backgroundColor: BLUE
                    }} className="w-full py-2 text-white text-sm rounded-md font-bold">
                        Submit
                    </button>
                </div>

                <div className='flex items-center space-x-4 py-4'>
                    <div className="w-full h-[2px] bg-gray-300"></div>
                </div>

                <h1 className='text-center font-semibold'>Contact Us</h1>

                <div className='flex w-full flex-col lg:px-24 px-12 space-y-4 my-8'>
                    {Contacts.map((contact, index) =>
                        <div key={index} className='flex items-center justify-center w-full space-x-8'>
                            <div className='flex items-center space-x-2 w-full'>
                                <img src={contact.icon} alt="phone" className="w-5 h-5" />
                                <p className="text-sm text-gray-600 font-semibold">{contact.title}</p>
                            </div>
                            <p className="text-sm text-blue-600 font-semibold text-start w-full">{contact.value}</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ValidateAdmission;

const Contacts = [
    {
        icon: PHONE_ICON,
        title: "Mobile Number",
        value: "+91-1234567890"
    },
    {
        icon: EMAIL_ICON,
        title: "Email",
        value: "loremipsum@gmail.com"
    },
    {
        icon: WEB_ICON,
        title: "Website",
        value: "www.loremipsum.com"
    },
    {
        icon: PIN_ICON,
        title: "Address",
        value: "Lorem ipsum dolor sit amet"
    },
]