import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from "react-icons/hi"
import { RiCloseLine } from "react-icons/ri"

import { logo } from "../assets"

const links = [
    { name: "Discover", to: "/", icon: HiOutlineHome },
    { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
    { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
    { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
]

const Nav = () => {
    return (
        <div>
            {links.map((link, index) => {
                return (
                    <NavLink key={index} to={link.to} onClick={() => {}}>
                        <link.icon />
                        {link.name}
                    </NavLink>
                )
            })}
        </div>
    )
}

export default function SideBar() {
    const [mobileModeOpen, setMobileModeOpen] = useState(false)

    return (
        <>
            <div>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <Nav />
            </div>
            {/* Mobile sidebar */}
            {/* <div>
                {mobileModeOpen ? <RiCloseLine /> : <HiOutlineMenu />}
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <Nav />
            </div> */}
        </>
    )
}
