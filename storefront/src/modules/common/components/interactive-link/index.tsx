import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "../localized-client-link"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
  <LocalizedClientLink
      className="relative w-44 font-semibold text-gray-800 px-6 py-3 text-lg bg-[#f59e0b] hover:bg-[#d97706] rounded-lg z-20"
      href={href}
      onClick={onClick}
      {...props}
  >
    {children}
  </LocalizedClientLink>
  )
}

export default InteractiveLink
