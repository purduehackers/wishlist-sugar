import IWish from "./interfaces/IWish";

export async function fetchWishes(): Promise<IWish[]> {
  const wishes: IWish[] = [];
  return new Promise((resolve, reject) => {
    fetch(`https://api.purduehackers.com/wishlist`)
      .then((r) => r.json())
      .then((records) => {
        for (const record of records) {
          wishes.push({
            title: record.fields["title"] as string,
            email: record.fields["email"] as string,
            details: record.fields["details"] as string,
            date: record.fields["date"] as Date,
          });
        }
        resolve(wishes);
      })
      .catch((err) => reject(err));
  });
}
