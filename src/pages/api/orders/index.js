import dbConnect from "../../../../utilities/mongo";
import Order from "../../../../Models/Order";


const handler = async (req, res) => {

    const {method} = req;

    await dbConnect();

    if(method === "GET"){
        try {
            const orders = await Order.find();
            res.status(200).json(orders)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    if(method === "POST"){
        try {
            const order = await Order.create(req.body);
            res.status(201).json(order)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

export default handler