import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";

const Body = () =>{
    return (
        <div className="grid grid-flow-col overflow-hidden pt-14">
            <SideMenu/>
            <Outlet/>
        </div>
    )
}

export default Body;