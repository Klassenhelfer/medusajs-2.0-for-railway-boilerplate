import LocalizedClientLink from "../localized-client-link"

type ButtonProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'amber'
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveButton = ({
  className,
  size = "md",
  color = "primary",
  href,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const sizeClasses: Record<string, string> = {
    sm: "px-3 py-1 text-sm rounded",
    md: "px-4 py-2 text-sm rounded-md",
    lg: "px-6 py-3 text-base rounded-lg",
    xl: "px-8 py-4 text-lg rounded-xl",
  }

  const bgColor: Record<string, string> = {
    primary: "bg-primary hover:bg-[#2563eb] text-white",
    amber: "bg-[#f59e0b] hover:bg-[#d97706] text-[#333]",
  }

  return (
    <LocalizedClientLink
        className={`relative w-44 font-semibold z-20 ${sizeClasses[size]} ${bgColor[color]} ${className}`}
        href={href}
        onClick={onClick}
        {...props}
    >
      {children}
    </LocalizedClientLink>
  )
}

export default InteractiveButton
