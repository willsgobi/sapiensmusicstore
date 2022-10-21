// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function categories(req, res) {
  res.status(200).json(categoriesResponse)
}

let categoriesResponse = [
  {
    "id": 1,
    "name": "Eletric Guitar",
  },
  {
    "id": 2,
    "name": "Acoustic Guitar",
  },
  {
    "id": 3,
    "name": "Drums",
  },
  {
    "id": 4,
    "name": "Basses",
  },
  {
    "id": 5,
    "name": "Accessories",
  },
]