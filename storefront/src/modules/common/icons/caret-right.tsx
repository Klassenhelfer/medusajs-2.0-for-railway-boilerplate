import React from "react"

import { IconProps } from "types/icon"

const CaretRight: React.FC<IconProps> = ({
    color = "#333"
}) => {
    return (
        <svg fill={color} className="caret inline-block w-2 -mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path
                d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/>
        </svg>
    )
}

export default CaretRight
