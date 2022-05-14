import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { IProduct } from '../../../interfaces'
import { Product } from '../../../models'

type Data =| {
    message: string
}
| IProduct[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch(req.method){
        case 'GET':
            return searchProducts(req, res)
        
        default:
            return res.status(400).json({
                message: 'Bad Request'
            })        
    }


}

const searchProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) =>{
    
        let{ q = ''} = req.query

        if (q.length === 0){
            return res.status(400).json({
                message: 'Debe Especificar Busqueda'
            })
        }

        q = q.toString().toLocaleLowerCase();

        await db.connect();
        const products = await Product.find({
            $test: {$search: q}
        })
        await db.disconnect();

        return res.status(200).json(products)

}
