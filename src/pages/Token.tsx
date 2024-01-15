import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"

const Telegram = () => {
    return (
        <div className="p-4">
            <h1 className="text-start font-semibold">Telegram</h1>

            <div className="flex flex-col px-16 space-y-4 items-center w-full">
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">YOUR_TELEGRAM_BOT_TOKEN:</h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <button className="bg-blue-500 text-white p-2 w-1/3 rounded-md mt-4">
                    Save
                </button>
            </div>

        </div>
    )
};

const Easebuzz = () => {
    return (
        <div className="p-4">
            <h1 className="text-start font-semibold">EaseBuzz</h1>

            <div className="flex flex-col px-16 space-y-4 items-center w-full">
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">Key:</h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">Sale: </h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <button className="bg-blue-500 text-white p-2 w-1/3 rounded-md mt-4">
                    Save
                </button>
            </div>
        </div>
    )
};

const CC_Avenue = () => {
    return (
        <div className="p-4">
            <h1 className="text-start font-semibold">CC Avenue</h1>

            <div className="flex flex-col px-16 space-y-4 items-center w-full">
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">Merchant ID:</h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">Access Code: </h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">Encryption Key: </h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <button className="bg-blue-500 text-white p-2 w-1/3 rounded-md mt-4">
                    Save
                </button>
            </div>
        </div>
    )
}

const Paytm_Gateway = () => {
    return (
        <div className="p-4">
            <h1 className="text-start font-semibold">Paytm Gateway</h1>

            <div className="flex flex-col px-16 space-y-4 items-center w-full">
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">$mid = "YOUR_MID_HERE";</h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">$key = "YOUR_KEY_HERE"; </h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">$website = "YOUR_WEBSITE_NAME"; </h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">$client_id = "YOUR_CLIENT_ID_HERE"; </h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <button className="bg-blue-500 text-white p-2 w-1/3 rounded-md mt-4">
                    Save
                </button>
            </div>
        </div>
    )
}

const Keka = () => {
    return (
        <div className="p-4">
            <h1 className="text-start font-semibold">Keka</h1>

            <div className="flex flex-col px-16 space-y-4 items-center w-full">
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">Client_ID:</h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">Client_Secret:</h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">api_key:</h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <button className="bg-blue-500 text-white p-2 w-1/3 rounded-md mt-4">
                    Save
                </button>
            </div>
        </div>
    )
}

const Wati_Api = () => {
    return (
        <div className="p-4">
            <h1 className="text-start font-semibold">Wati Api</h1>

            <div className="flex flex-col px-16 space-y-4 items-center w-full">
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">Access Token:</h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">API Endpoint:</h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">Whatsapp number:</h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <button className="bg-blue-500 text-white p-2 w-1/3 rounded-md mt-4">
                    Save
                </button>
            </div>
        </div>
    )
}

const Interkt_Api = () => {
    return (
        <div className="p-4">
            <h1 className="text-start font-semibold">Interkt Api</h1>

            <div className="flex flex-col px-16 space-y-4 items-center w-full">
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">Secret Key:</h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <button className="bg-blue-500 text-white p-2 w-1/3 rounded-md mt-4">
                    Save
                </button>
            </div>
        </div>
    )
}

const Kit_19 = () => {
    return (
        <div className="p-4">
            <h1 className="text-start font-semibold">Kit 19</h1>

            <div className="flex flex-col px-16 space-y-4 items-center w-full">
                <div className="flex md:flex-row flex-col items-center w-full">
                    <h1 className="w-full">Token:</h1>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <button className="bg-blue-500 text-white p-2 w-1/3 rounded-md mt-4">
                    Save
                </button>
            </div>
        </div>
    )
}


type Token = "telegram" | "easebuzz" | "cc-avenue" | "paytm-gateway" | "keka" | "wati-api" | "interkt-api" | "kit-19"

const Token = () => {

    // make that token coming from params to lowercase to match the type Token
    const params = useParams<{ token: Token }>()
    const token = params.token!.toLowerCase()

    return (
        <>
            <Navbar />
            <main className="w-full h-screen bg-gray-100">
                {token === "telegram-api" && <Telegram />}
                {token === "easebuzz-api" && <Easebuzz />}
                {token === "cc-avenue-api" && <CC_Avenue />}
                {token === "paytm-gateway" && <Paytm_Gateway />}
                {token === "keka" && <Keka />}
                {token === "wati-api" && <Wati_Api />}
                {token === "interkt-api" && <Interkt_Api />}
                {token === "kit-19" && <Kit_19 />}
            </main>
        </>
    )
}

export default Token