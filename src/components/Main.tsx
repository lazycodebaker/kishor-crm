import Sidebar from "./Sidebar/Sidebar"

const Main : React.FC = () => {
    return(
        <main 
        style={{
            height : 'calc(100vh - 113px)'
        }}
        className="w-full flex ">
            <Sidebar />
            <h1>
                main
            </h1>
        </main>
    )
}

export default Main