import { useState, useEffect } from "react"
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  const [data, setData] = useState<{ name: string; url: string }[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('api/list').then((res) => res.json())
    .then((data) => {
      setData(data.files)
      setLoading(false)
    })
      
  }, [])

  return (
    <div className="container mx-auto pt-5">
      <table className="table-fixed w-full text-center">
        <thead>
          <tr>
            <th>Files</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((file, index) => (
            <tr key={index}>
            <td>{file.name}</td>
            <td><Link href={file.url}>Click here to see detail</Link></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
