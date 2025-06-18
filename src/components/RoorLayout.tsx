import { Outlet } from "react-router-dom";
import { ContentBlock } from "./ContentBlock";
import type React from "react";

export type Props = {
    children: React.ReactNode;
};

export function RootLayout() {
    return (
        <div className="h-screen flex flex-col">
            <main className="flex flex-col h-full px-2 sm:px-8 py-2 sm:py-5">
                <ContentBlock>
                    <Outlet />
                </ContentBlock>
            </main>
        </div>
    );
}