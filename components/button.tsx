import type { FC } from "react"

const Button: FC<{
  text: string
  type?: "button" | "submit" | "reset" | undefined
  isLoading?: boolean
}> = ({
  text = "",
  type,
  isLoading = true,
}) => {
    return (
      <button type={type} className="rounded-full border p-2 bg-gray-800 text-white hover:bg-gray-400 hover:border-transparent">
        {
          isLoading && (
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
          )
        }
        {text}
      </button>
    )
  }

export default Button
