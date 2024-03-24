import { Outlet } from "react-router-dom";
import Header from "../Component/Header";

export default function Layout(){
    return (
        <div className=" flex flex-col z-20 min-h-screen  bg-gradient-to-r from-black  to-gray-800  ">
            <Header />
            <Outlet />
        </div>
    );
}