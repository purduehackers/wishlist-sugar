import type { NextApiRequest, NextApiResponse } from 'next';
import { base } from '../../utils/airtable';
import { getSession } from 'next-auth/react';
import { createWishes } from '../../utils/createWishes';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  return new Promise<void>(async (resolve, reject) => {
    switch (method) {
      case 'POST': {
        const session = await getSession({ req });
        createWishes(req, session!)
          .then((response) => {
            res.status(200).end();
            return resolve();
          })
          .catch((err) => {
            res.status(500).end();
            return resolve();
          });
      }
    }
  });
};

export default handler;
