import { useState, useEffect } from "react"
import type { NextPage } from 'next'
import Button from "../../../components/button"

const List: NextPage = () => {
  const [data, setData] = useState<{ name: string; url: string }[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/list').then((res) => res.json())
      .then((data) => {
        setData(data.files)
        setLoading(false)
      })

  }, [])

  return (
    <div className="container mx-auto pt-5">
      <div className="flex justify-end mb-15">
        <Button text="Create" />
      </div>
      <table className="table-fixed w-full text-center">
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
              <td><Button text="Edit" /> <Button text="Delete" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
