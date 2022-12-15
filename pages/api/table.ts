import type { NextApiRequest, NextApiResponse } from "next";
import { base } from "../../utils/airtable";
import { getSession } from "next-auth/react";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "POST":
      const session = await getSession({ req });
      const email = session?.user?.email || "null";
      const now = new Date();

      base("wishlist").create(
        [
          {
            fields: {
              Title: req.body.inputs.title,
              Email: email,
              Details: req.body.inputs.details,
              Date: now.toString(),
              Unlisted: false,
            },
          },
        ],
        function (err: Error) {
          if (err) {
            console.error(err);
            return res.status(500).json({ msg: err });
          }
        }
      );
      console.log("record added sucessfully");
      return res.status(200).json({ msg: "record added successfully" });
  }
};

export default handler;
