import IWish from "./interfaces/IWish";

export async function fetchWishes(): Promise<IWish[]> {
  const wishes: IWish[] = [];
  const select = encodeURIComponent(
    JSON.stringify({
      sort: [{ field: "Date", direction: "desc" }],
    })
  );
  return new Promise((resolve, reject) => {
    const api = `https://api.purduehackers.com/wishlist?select=${select}`;
    // const api = `http://localhost:8080/wishlist?select=${select}`;
    fetch(api)
      .then((r) => r.json())
      .then((records) => {
        for (const record of records) {
          wishes.push({
            Title: record.fields["Title"] as string,
            Email: record.fields["Email"] as string,
            Details: record.fields["Details"] as string,
            Date: record.fields["Date"] as Date,
          });
        }
        resolve(wishes);
      })
      .catch((err) => reject(err));
  });
}
