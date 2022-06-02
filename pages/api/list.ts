// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from "path"

type Data = {
  files: {
    name: string
    url: string
  }[]
}
const CONTENT_PATH = path.join(process.cwd(), 'pages/files')

export default function list(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const files = fs.readdirSync(CONTENT_PATH).map((eq) => ({ name: eq, url: `files/${eq.replace(/\.mdx?$/, '')}` }))

  res.status(200).json({ files })
}
