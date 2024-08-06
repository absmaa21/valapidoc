import {Outlet} from "react-router-dom";
import NavTab from "./components/NavTab.tsx";
import {PvpEndpoints} from "./endpoints/pvp-endpoints.ts";
import NavCollapsible from "./components/NavCollapsible.tsx";
import {EsportEndpoints} from "./endpoints/esport-endpoints.ts";

function Layout() {
    return (
        <div className="d-flex flex-row min-vh-100 vw-100">
            <nav className={"nav flex-column bg-dark p-2 gap-1 border-end border-secondary vh-100 overflow-y-scroll flex-nowrap"} style={{width: 300}}>
                <h4 className={"text-white text-center"}>Valorant API Docs</h4>
                <p className={"text-white-50 text-center"}>(Unofficial)</p>
                <NavTab path={"/"} title={"Home"}/>
                <NavCollapsible data={PvpEndpoints} title={"Pvp Endpoints"}/>
                <NavCollapsible data={EsportEndpoints} title={"Esport Endpoints"}/>
            </nav>
            <main className={"d-flex col flex-column vh-100 overflow-y-scroll bg-dark"}>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout
