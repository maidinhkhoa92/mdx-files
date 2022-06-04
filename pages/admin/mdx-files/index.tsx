import { useState, useEffect } from "react"
import type { NextPage } from 'next'
import { useRouter } from "next/router"
import Button from "../../../components/button"
import { TabletLoading } from "../../../components/skeleton"
import Modal from "../../../components/modal"
import axios from "axios"

const List: NextPage = () => {
  const [data, setData] = useState<{ name: string; url: string; id: string }[]>([])
  const [isLoading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const [id, setId] = useState<null | string>(null)

  const openPopup = (fileId: string) => {
    setOpen(true)
    setId(fileId)
  }

  useEffect(() => {
    setLoading(true)
    fetch('/api/list').then((res) => res.json())
      .then((data) => {
        setData(data.files)
        setLoading(false)
      })
  }, [])

  const onRemoveFile = async () => {
    try {
      console.log(1)
      await axios.delete(`/api/delete/${id}`)
      console.log(2)
      setData((prev) => prev.filter((eq) => eq.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mx-auto pt-5">
      <div className="flex justify-end mb-15">
        <Button text="Create" onClick={() => router.push("/admin/mdx-files/form")} />
      </div>
      {isLoading ? <TabletLoading /> : <table className="table-fixed w-full text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Files</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((file, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{file.name}</td>
              <td>
                <Button text="Edit" onClick={() => router.push(`/admin/mdx-files/form/${file.id}`)} />
                <Button text="Delete" onClick={() => openPopup(file.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>}
      <Modal
        title="Delete file"
        content="Are you sure to delete this file?"
        open={open}
        button={<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button onClick={onRemoveFile} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Delete</button>
          <button onClick={() => setOpen(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
        </div>}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

export default List
