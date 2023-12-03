import dbConnect from "../../../../utilities/mongo";
import Order from "../../../../Models/Order";


const handler = async (req, res) => {
    const {method, query: {id}} = req;

    if(method === "GET"){
        try{
            const order= await Order.findById(id);
            res.status(200).json(order);
        }catch(err){
            res.status(500).json(err);
        }
}

    if(method === "PUT"){
        if(method === "PUT"){
            try {
                const order = await Order.findByIdAndUpdate(id, req.body, {
                    new: true,
                })
                res.status(201).json(order)
            } catch (error) {
                res.status(500).json(error)
            }
        }
    }
}

export default handler