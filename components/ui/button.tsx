import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
    {
        variants: {
            variant: {
                default: "bg-scuf-green text-white hover:bg-scuf-green/90 shadow-md hover:shadow-lg",
                secondary: "bg-scuf-yellow text-scuf-dark hover:bg-scuf-yellow/80",
                outline: "border-2 border-scuf-green text-scuf-green hover:bg-scuf-green hover:text-white",
                ghost: "hover:bg-neutral-green/20 text-scuf-dark",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-8 py-2 rounded-full",
                sm: "h-9 px-4 rounded-full",
                lg: "h-14 px-10 text-lg rounded-full",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
