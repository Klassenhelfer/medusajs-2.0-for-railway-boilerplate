import React from "react"

import { IconProps } from "types/icon"

type CloseProps = {
    onClick?: () => void; // Ensure it's a function without an event parameter
};

const Close: React.FC<CloseProps> = ({ onClick  }) => {
    return (
        <svg onClick={onClick} width="28" height="28" className="absolute top-5 right-5 cursor-pointer" fill="#333" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 384 512">
            <path d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"/>
        </svg>
    )
}

export default Close
