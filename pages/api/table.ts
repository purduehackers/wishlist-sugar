// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { table, base } from "../../utils/airtable"
import { getSession } from 'next-auth/react'
import { Session } from 'next-auth'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { method } = req;
  switch(method) {
    case 'GET':
      res.json({ title: 'this is cool', details: 'rocket'});
      break;
    case 'POST':
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
      ], function (err: Error) {
        if (err) {
          console.error(err);
          return res.status(500).json({ msg: err});
        }
      });
      console.log("record added sucessfully");
      return res.status(200).json({ msg:"record added successfully" });
  }
}

export default handler