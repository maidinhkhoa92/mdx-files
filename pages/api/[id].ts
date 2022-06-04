// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from "path"

type Data = {
  data: string
}
const CONTENT_PATH = path.join(process.cwd(), 'pages/files')

export default function create(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query
  const data = fs.readFileSync(`${CONTENT_PATH}/${id}.mdx`, {encoding:'utf8', flag:'r'})
  
  res.status(200).json({ data })
}
