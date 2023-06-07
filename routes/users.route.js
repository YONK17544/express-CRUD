import express from 'express';

const router = express.Router();

//CRUD

const users = ["samik", "ram", "hari"]

//READ
router.get('/users', (req, res) =>{  
    res.status(200).json({
        status: true,
        data: users,
        message: "User created successfully"
    })
})

//CREATE
router.post('/users', (req, res) =>{
    // console.log(req.body);
    const { name } = req.body;
    users.push(name);

    res.status(200).json({
        status: true,
        users, 
        message: "User created successfully"
    })
})

//UPDATE
router.patch('/users/:id', (req, res) =>{
    // console.log(req.body);
    // console.log(req.params.id);
    const { id } = req.params;
    const { name } = req.body;

    users[id] = name;

    res.status(200).json({
        status: true,
        users, 
        message: "User created successfully"
    })
})

//DELETE
router.delete('/users/:id', (req, res) =>{ 
    const { id } = req.params;

    delete users[id]

    res.status(200).json({
        status: true,
        users, 
        message: "User deleted successfully"
    })
})


export default router;