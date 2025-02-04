"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function NavLinkHighlighter() {
    const pathname = usePathname() // z. B. "/de/account" oder "/de"

    useEffect(() => {
        const navItems = document.querySelectorAll("[data-route]")

        navItems.forEach((item) => {
            const route = item.getAttribute("data-route") // z. B. "/account" oder ""

            // Prüfen, ob wir uns auf der Root-Route befinden (z. B. "/de" oder "/")
            const pathSegments = pathname.split("/").filter(Boolean) // Entfernt leere Strings
            const currentRoute = pathSegments.length > 1 ? `/${pathSegments.pop()}` : "/"

            if ((route === "" && currentRoute === "/") || route === currentRoute) {
                item.classList.add("text-[#f59e0b]")
            } else {
                item.classList.remove("text-[#f59e0b]")
            }
        })
    }, [pathname])

    return null
}
