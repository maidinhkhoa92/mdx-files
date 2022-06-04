import { useState } from "react";
import _ from "lodash";
import Editor from "../../../../components/editor";
import axios from "axios"


const Create = () => {
  const [id, setId] = useState()
  const [loading, setLoading] = useState(false)

  const debounceQuery = _.debounce((content: string) => {
    axios.post('/api/create', { content, id }).then((response) => {
      setId(response?.data?.id)
    })
  }, 5000)
  const onChange = (value: string) => {
    debounceQuery(value);
  };


  return (
    <>
      <div className="bg-gray-800 pt-3">
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
          <h1 className="font-bold pl-2">Form</h1>
        </div>
      </div>
      <div className="w-full p-3">
        <Editor onChange={onChange} />
      </div>
    </>
  )
}

export default Create