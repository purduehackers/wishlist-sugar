import IWish from "./interfaces/IWish";
import { base } from "./airtable";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

export async function createWishes(
  req: NextApiRequest,
  session: Session
): Promise<IWish[]> {
  const email = session?.user?.email || "null";
  const now = new Date();
  const response = await base("wishlist").create([
    {
      fields: {
        Title: req.body.inputs.title,
        Email: email,
        Details: req.body.inputs.details,
        Date: now.toString(),
        Unlisted: false,
      },
    },
  ]);
  return response;
}
