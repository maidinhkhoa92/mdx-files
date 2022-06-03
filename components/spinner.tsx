import type { FC } from "react"
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Spinner: FC = () => {
    return (
      <FontAwesomeIcon icon={faSpinner} className="animate-spin h-5 w-5 mr-3" />
    )
  }

export default Spinner
