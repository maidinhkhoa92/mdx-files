import type { FC } from "react"
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button: FC<{
  text: string
  type?: "button" | "submit" | "reset" | undefined
  isLoading?: boolean
  onClick?: () => void
}> = ({
  text = "",
  type,
  isLoading,
  onClick,
}) => {
    return (
      <button onClick={onClick} type={type} className="rounded-full border p-2 bg-gray-800 text-white hover:bg-gray-400 hover:border-transparent">
        {isLoading && <FontAwesomeIcon icon={faSpinner} className="animate-spin h-5 w-5 mr-3" />}
        {text}
      </button>
    )
  }

export default Button
