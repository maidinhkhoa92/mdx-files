import { useState } from "react";
import _ from "lodash";
import Editor from "../../../../components/editor";
import Button from "../../../../components/button";
import axios from "axios"
import { useRouter } from "next/router";


const Create = () => {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState("")
  const router = useRouter()

  const onChange = () => {
    setLoading(true)
    axios.post('/api/create', { content: value }).then(() => {
      router.back()
    }).finally(() => setLoading(false))
  };

  return (
    <>
      <div className="bg-gray-800 pt-3">
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
          <h1 className="font-bold pl-2">Form</h1>
        </div>
      </div>
      <div className="w-full p-3 h-96 max-h-full overflow-y-scroll">
        <Editor onChange={setValue} />
        <Button isLoading={loading} text="Save and Exit" onClick={onChange} />
        <Button text="Discard" onClick={() => router.back()} />
      </div>
    </>
  )
}

export default Create
