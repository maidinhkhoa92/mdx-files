// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from "path"
import Cors from 'cors'
import { delay } from "lodash"

type Data = {
  data: string
}

const cors = Cors({
  methods: ['GET', 'HEAD'],
})

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

export default async function detail(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await runMiddleware(req, res, cors)

  delay(() => {
    const { id } = req.query
    const data = fs.readFileSync(`${CONTENT_PATH}/${id}.mdx`, {encoding:'utf8', flag:'r'})
    
    res.status(200).json({ data })
  }, 3000)
  
}
