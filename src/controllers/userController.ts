// import { Request, Response } from "express";
// import bcrypt from "bcryptjs";
const bcrypt = require("bcryptjs")
const userServece = require('../service/userService')

const hashUserPassword = async (password: string) => {
  const salt = await bcrypt.genSaltSync(10);
  const hash: string = await bcrypt.hashSync(password, salt);
  return hash
}

const readUser = async (req: any, res: any) => {
    try {
        const page: number = req.query.page ? parseInt(req.query.page) : 1
        const limit: number = req.query.limit ? parseInt(req.query.limit) : 10 
        console.log('page, limit la: ', page, ', ', limit)
        const data = await userServece.getListUser(page , limit)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
            status: 200
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "error from server",
            EC: 1,
            DT: '',
            status: 500
        })
    }
};

const createUser = async (req: any, res: any) => {
    const firstName: string = req.body.firstName
    const lastName: string = req.body.lastName
    const email: string = req.body.email
    const password: string = req.body.password
    const username: string = req.body.userName
    const avatar:string = req.body.avatar
    const age:number = req.body.age

    const hashPassword = await hashUserPassword(password)

    try {
        const data = await userServece.addNewUser(firstName, lastName, email, hashPassword, username, avatar, age)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
            status: 200
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "error from server",
            EC: 1,
            DT: '',
            status: 500
        })
    }
};

const updateUser = (req: any, res: any) => {
  res.json({ message: "Danh sách users" });
};

const deleteUser = (req: any, res: any) => {
  res.json({ message: "Danh sách users" });
};


module.exports = {readUser, createUser}