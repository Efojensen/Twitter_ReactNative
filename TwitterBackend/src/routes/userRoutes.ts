import { Router } from 'express';
import { PrismaClient } from '@prisma/client'

const router = Router();
const prisma = new PrismaClient();
// TWEET CRUD endpoints

// CREATE a User
router.post('/', async(req, res) => {
    const { email, name, username } = req.body
    try {
        const result = await prisma.user.create({
            data: {
                email,
                name,
                username,
                bio: "Hello I'm new to twitter."
            }
        })
        console.log(email, name, username);
        res.json(result)
    } catch (error) {
        res.status(400).json({ error: "Username and email should be unique."})
    }
})

// LIST Users
router.get('/', async (req, res) => {
    const allUsers = await prisma.user.findMany(
        // {select: {
        //     id: true,
        //     name: true,
        //     image: true,
        //     bio: true,
        // }}
    );
    res.json(allUsers)
})

// GET one User
router.get('/:id',async (req, res) => {
    const {id} = req.params
    const user = await prisma.user.findUnique({ where: {id: Number(id)},
        include: {tweets: true}
    })

    res.json(user)
})

// UPDATE User
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { bio, name, image } = req.body

    try {
        const result = await prisma.user.update({
            where: {id: Number(id)},
            data: {
                bio, name, image
            }
        })
        res.json(result)
    } catch (error) {
        res.status(400).json({error: "Failed to update the user."})
    }
    res.status(501).json({error: `Not implemented: ${id}`})
})

// DELETE User
router.delete('/:id', async(req, res) => {
    const { id } = req.params
    await prisma.user.delete({where: {id: Number(id)}})
    res.sendStatus(200);
})

export default router;