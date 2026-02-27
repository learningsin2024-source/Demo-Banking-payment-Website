import { Outlet } from "react-router";
import Sidebar from "./ui/Sidebar";

const DashboardLayout = () => {
    return (
        <>
            <div className="flex flex-row gap-1.5 h-screen overflow-hidden ">
                <div className=" h-full  bg-gray-50 text-black w-64 ">
                    <Sidebar />
                </div>

                <div className="bg-white text-black flex-1 overflow-y-auto"></div>
            </div>
        </>
    );
};

export default DashboardLayout;
