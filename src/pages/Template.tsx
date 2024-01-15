

import React from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"

const Template: React.FC = () => {
    return (
        <>
            <Navbar />
            <main
                style={{
                    height: 'calc(100vh - 113px)'
                }}
                className="w-full flex ">
                <Sidebar />

            </main>
        </>
    )
}

export default Template
