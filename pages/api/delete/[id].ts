// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from "path"

type Data = {
  message: string
}
const CONTENT_PATH = path.join(process.cwd(), 'pages/files')

export default async function remove(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { id } = req.query
    await fs.unlinkSync(`${CONTENT_PATH}/${id}.mdx`)
    res.status(200).json({ message: "Success" })
  } catch (error) {
  }
}
