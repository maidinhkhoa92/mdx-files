// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from "path"
import { delay } from 'lodash'
import Cors from 'cors'

const cors = Cors({
  methods: ['GET', 'HEAD'],
})

type Data = {
  files: {
    name: string
    url: string
  }[]
}
const CONTENT_PATH = path.join(process.cwd(), 'pages/files')

function runMiddleware(req: NextApiRequest,
  res: NextApiResponse<Data>, fn: (req: Cors.CorsRequest, res: {
    statusCode?: number | undefined;
    setHeader(key: string, value: string): any;
    end(): any;
}, next: (err?: any) => any) => void) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function list(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await runMiddleware(req, res, cors)

  delay(() => {
    const files = fs.readdirSync(CONTENT_PATH).map((eq) => ({ name: eq, url: `${process.env.SITE_URL}files/${eq.replace(/\.mdx?$/, '')}`, id: eq.replace(/\.mdx?$/, '') }))
    res.status(200).json({ files })
  }, 3000)
}
