

import React from "react"
import Navbar from "../../../components/Navbar"
import Table from "./Table"
import Sidebar from "../../../components/Sidebar/Sidebar"

const EmailTemplate: React.FC = () => {
    return (
        <>
            <Navbar />
            <main
                style={{
                    height: 'calc(100vh - 113px)'
                }}
                className="w-full flex ">
                <Sidebar />
                <Table />
            </main>
        </>
    )
}

export default EmailTemplate
