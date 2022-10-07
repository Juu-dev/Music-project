import React from "react"

import { SideBar } from "../components"

export default function DefaultLayout({ children }) {
    return (
        <div>
            <SideBar />
            {children}
        </div>
    )
}
