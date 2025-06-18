import { Outlet } from "react-router-dom";
import type React from "react";
import { Sidebar } from "./SideBar";

export type Props = {
    children: React.ReactNode;
};

export function RootLayout() {
    return (
        <div className="flex flex-row h-screen">
            <Sidebar/>
            <main className="flex-1 bg-gray-50 p-6">
                <Outlet />
            </main>
        </div>
    );
}