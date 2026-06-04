import express, { Request, Response } from 'express'
import { prisma } from '../lib/prisma'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json({ users: users, total: users.length });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
})

router.post('/', async (req, res) => {
    const { name, email } = req.body;

    if(!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    try {
        const user = await prisma.user.create({
            data: { name, email}
        })

        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
})


router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await prisma.user.delete({
            where: { id: parseInt(id) }
        })
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    if(!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
        const user = await prisma.user.update({
            where: { id: parseInt(id) },
            data: { name, email }
        })

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });  
    }
})

export default router;