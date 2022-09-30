import { NextApiRequest, NextApiResponse } from "next"

export default (req : NextApiRequest, res : NextApiResponse) => {
    const id = request.query

    const user = [
        { id: 1, name: 'Diego'},
        { id: 2, name: 'Dani'},
        { id: 3, name: 'Rafa'},
    ]

    return res.json(user);
}