import { forwardRef, HTMLAttributes } from "react"
import { cn } from "~/js/utils"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("shadow-md rounded-md", className)}
        {...props}
    />
))

export { Card }