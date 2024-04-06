import { Request, Response } from 'express'
import User from '../models/user'

const createCurrentUser = async (req: Request, res: Response) => {
  // 1.check if user exists

  try {
    const { auth0Id } = req.body
    const existingUser = await User.findOne({ auth0Id })
    if (existingUser) {
      return res.status(200).send()
    }
    // 2. if user does not exist, create user
    const newUser = new User(req.body)
    await newUser.save()
    // 3. return user
    res.status(201).json(newUser.toObject())
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, country, city } = req.body
    const user = await User.findById(req.userId)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    user.name = name
    user.address = addressLine1
    user.city = city
    user.country = country
    await user.save()
    res.send(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error updating user' })
  }
}

export default { createCurrentUser, updateCurrentUser }
