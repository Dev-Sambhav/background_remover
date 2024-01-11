import React from 'react'
import {Link} from "react-router-dom"
import logo from "../images/remover_logo.png"

const Header: React.FC = () => {
    const menu = [
        {name:"home", route:"/"},
        {name:"about", route:"/about"},
    ];
    return (
        <nav className=' bg-zinc-600 opacity-85 absolute w-screen h-12 z-10 text-slate-50 flex justify-evenly backdrop:blur-sm backdrop-blur-sm'>
                <img src={logo} alt="logo" className=' h-12 invert' />
            <ul className='flex justify-evenly items-center w-1/2 md:w-1/3 capitalize'>
                {
                    menu.map((e,i)=>(
                        <Link className=' hover:text-fuchsia-500 duration-300 cursor-pointer' to={e.route} key={i}>{e.name}</Link>
                        ))
                    }
            </ul>
        </nav>
    )
}

export default Header