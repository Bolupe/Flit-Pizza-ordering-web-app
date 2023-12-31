export default async function handler(req, res){
    const {method} = req;

    dbConnect()

    if(method === "GET"){
        try {
            const products = await Products.find();
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if(method === "POST"){
        try {
            const product = await Products.create(req.body)
            res.status(201).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}