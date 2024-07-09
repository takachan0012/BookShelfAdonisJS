import { forwardRef, HTMLAttributes } from "react"
import { cn } from "~/js/utils"

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    type?: string,
    placeholder?: string
}

const Input = forwardRef<HTMLDivElement, Props>(({ className, type, placeholder, ...props }) => (
    <input
        type={type}
        placeholder={placeholder}
        className={cn("rounded-md p-4 border border-gray-300", className)}
        {...props}
    />
))

export { Input }