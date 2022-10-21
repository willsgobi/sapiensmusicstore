// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function getBrands(req, res) {
  res.status(200).json(brandsResponse)
}

let brandsResponse = [
    {
        "id": 1,
        "name": "Fender"
    },
    {
        "id": 2,
        "name": "Gibson"
    },
    {
        "id": 3,
        "name": "Tama"
    },
    {
        "id": 4,
        "name": "Mogami"
    },
    {
        "id": 5,
        "name": "Epiphone"
    },
]
  