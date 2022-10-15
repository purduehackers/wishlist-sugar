// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { table, base } from "../../utils/airtable"
import { getSession } from 'next-auth/react'
import { Session } from 'next-auth'

type Data = {
  title: string,
  details: string
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { method } = req;
  switch(method) {
    case 'GET':
      res.json({ title: 'this is cool', details: 'rocket'});
      break;
    case 'POST':
      console.log(req.body);;
      createIdea(req);
  }
}

const createIdea = async (req: NextApiRequest) => {
  const session = await getSession({ req })
  const email = session?.user?.email || "null";
  base('wishlist').create([
    {
      "fields": {
        "title": req.body.inputs.title,
        "gmail": email,
        "details": req.body.inputs.details
      }
    },
  ], function(err: Error) {
    if (err) {
      console.error(err);
      return;
    }
  });
}

export default handler