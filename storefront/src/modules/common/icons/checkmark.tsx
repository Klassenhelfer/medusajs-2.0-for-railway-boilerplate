import React from "react"

import { IconProps } from "types/icon"

const Checkmark: React.FC<IconProps> = ({
    size = "12",
    color = "#fff",
    ...attributes
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 170 131" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={color} fill-rule="evenodd" clip-rule="evenodd" d="M164.206 5.56497C171.626 12.9849 171.626 25.0151 164.206 32.435L71.8216 124.82C67.8333 128.808 62.513 130.653 57.2927 130.354C52.2006 130.539 47.048 128.689 43.1607 124.801L5.56497 87.2055C-1.85499 79.7855 -1.85499 67.7554 5.56497 60.3354C12.9849 52.9155 25.0151 52.9155 32.435 60.3354L57.5005 85.4009L137.336 5.56497C144.756 -1.85499 156.786 -1.85499 164.206 5.56497Z" />
        </svg>
    )
}

export default Checkmark
