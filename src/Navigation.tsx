import { AppBar } from "@mui/material";
import { NavLink } from "react-router-dom";

export function Navigation() {
    return (
        <AppBar position="static">
            <div className="flex flex-row items-center justify-between py-2 px-3">
                <div className="flex flex-row items-center gap-5">
                    <NavLink to="/" className="pr-5">
                        <div className="flex flex-row items-center gap-2">
                            <span className="sm:text-2xl">TeamPulse</span>
                        </div>
                    </NavLink>
                    <NavLink to="team">Команды</NavLink>
                    <NavLink to="skills">Скилы</NavLink>
                </div>
                <NavLink to={"/login"}>Войти</NavLink>
            </div>
        </AppBar>
    );
}