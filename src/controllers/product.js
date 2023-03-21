// import joi from "joi"
import Product from "../models/product"

// const productSchema = joi.object({
//     name: joi.string().required,
//     price: joi.number().required()
// })

export const getAll = async (res, req) => {
    try {
        const products = await Product.find();
        if (products.lenth === 0) {
            return res.status(404).json({
                message: "Khoong co san pham nao "
            })
        }

        return res.json({
            message: "lay danh sach san pham thanh cong ",
            products
        })
    }
    catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const get = async (res, req) => {
    try {
        const product = await Product.find();
        if (!product) {
            return res.status(404).json({
                message: "Khoong co san pham nao "
            })
        }

        return res.json({
            message: "lay danh sach san pham thanh cong ",
            product

        })
    }
    catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
// export const create = async (res, req) => {
//     try {

//         const product = await Product.();
//         if (!product) {
//             return res.status(404).json({
//                 message: "Khoong co san pham nao "
//             })
//         }

//         return res.json({
//             message: "lay danh sach san pham thanh cong ",
//             product

//         })
//     }
//     catch (error) {
//         return res.status(400).json({
//             message: error
//         })
//     }
// }



