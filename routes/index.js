import express from 'express';
import userRouter from './users.route.js'
const router = express.Router();

router.use(userRouter);


router.get('/', (req, res) =>{
    const users = ["samik", "ram", "hari"]
    // res.render('index', {
    //     users
    // });
    res.send("Home Page");
})


router.get('/products', (req, res) =>{
    const products = ["apple", "samsung", "mi"]
    
    res.status(200).json({
        status: true,
        data: products,
        message: "Product added successfully"
    })
})

export default router;