import { Button } from "@mui/material";
import { NavLink } from "react-router";

export function Sidebar() {
    const navItems = [
        { label: 'Главная', to: '/dashboard' },
        { label: 'Отчёты',  to: '/teams' },
        { label: 'Настройки', to: '/settings' },
    ]
 
    return (
        <aside className="flex flex-col p-4 w-64 h-full bg-white ">
            <NavLink to={"/"} className="text=2xl font-bold text-cyan-700 mb-10">TeamPulse</NavLink>
            <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({isActive}) =>
                            isActive 
                            ? 'text-white bg-cyan-700 rounded-md'
                            : 'text-cyan-700 hover:bg-cyan-100 rounded-md'
                        }>
                            <Button fullWidth className="justify-start normal-case w-full text-left">
                                {item.label}
                            </Button>
                    </NavLink>
                ))}
            </div>
        </aside>
    )
}