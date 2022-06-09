import { useRouter } from 'next/router'
import _ from "lodash";
import Editor from "../../../../components/editor";
import axios from "axios"
import { useEffect, useState } from 'react';
import { ContentLoading } from '../../../../components/skeleton';
import Button from "../../../../components/button"


const Update = () => {
  const router = useRouter()
  const { id } = router.query
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`/api/${id}`).then((response) => {
      setValue(response?.data?.data || "")
      setLoading(false)
    })
  }, [id])

  const onChange = () => {
    setLoading(true)
    
    axios.post('/api/create', { content: value, id }).then(() => {
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
        {loading ? <ContentLoading /> : <Editor onChange={setValue} value={value} />}

        <Button isLoading={loading} text="Save and Exit" onClick={onChange} />
        <Button text="Discard" onClick={() => router.back()} />
      </div>
    </>
  )
}

export default Update
