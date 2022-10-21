// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import productList from './productList';

export default function products(req, res) {
  var { maxLength, dynamic } = req.query
  console.log(maxLength)

  if(dynamic != null) {
    let shuffled = productList
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    if(maxLength != null) {
      shuffled = shuffled.slice(0, maxLength);
    }

    res.status(200).json(shuffled)
  } else if(maxLength != null) {
    let listSlice = productList.slice(0, maxLength);
    res.status(200).json(listSlice)
  } else {
    res.status(200).json(productList)
  }
}

