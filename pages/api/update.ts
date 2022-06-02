// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from "path"
import { v4 as uuidv4 } from 'uuid';

type Data = {
  name: string
}
const CONTENT_PATH = path.join(process.cwd(), 'pages/files')

export default function create(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id = uuidv4()
  const { content } = req.body
  fs.appendFile(`${CONTENT_PATH}/${id}.mdx`, content, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  res.status(200).json({ name: id })
}
