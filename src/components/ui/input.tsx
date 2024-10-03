import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * `Input` is a React forwardRef component that renders an input element with various styles and properties.
 * 
 * @param {InputProps} props - The properties passed to the input component.
 * @param {string} props.className - Additional class names to apply to the input element.
 * @param {string} props.type - The type of the input element.
 * @param {React.Ref<HTMLInputElement>} ref - The ref to be forwarded to the input element.
 * 
 * @returns {JSX.Element} The rendered input element.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
