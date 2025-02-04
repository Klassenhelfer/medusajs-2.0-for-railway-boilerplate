import React from "react"

import { IconProps } from "types/icon"

const Menu: React.FC<IconProps> = ({
    size = "28",
    color = "#333"
}) => {
    return (
        <svg width={size} height={size} className="mt-px cursor-pointer" fill={color} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
                d="M0 88C0 74.7 10.7 64 24 64l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 112C10.7 112 0 101.3 0 88zM0 248c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 272c-13.3 0-24-10.7-24-24zM448 408c0 13.3-10.7 24-24 24L24 432c-13.3 0-24-10.7-24-24s10.7-24 24-24l400 0c13.3 0 24 10.7 24 24z"/>
        </svg>
    )
}

export default Menu
