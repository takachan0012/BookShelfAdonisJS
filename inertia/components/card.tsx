import { forwardRef, HTMLAttributes } from "react"
import { cn } from "~/js/utils"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("md:shadow-md rounded-md p-4", className)}
        {...props}
    />
))

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
    <h1
        ref={ref}
        className={cn("text-lg font-semibold", className)}
        {...props}
    />
))

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm flex flex-col gap-3", className)}
        {...props}
    />
))
export { Card, CardTitle, CardContent }