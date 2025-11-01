// import { Request, Response } from "express";
// import bcrypt from "bcryptjs";
// import multer from "multer";

// khai bao luu hinh
// const multer = require("multer")
// const path = require("path")

const userServece = require('../service/userService')


const readUserById = async (req: any, res: any) => {
    try {
        const id = req.params.id
        const data = await userServece.getUserById(id)
        // console.log("data user by id: ", data)
        if (data) {
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT,
                status: 200
            }) 
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "error from server",
            EC: 1,
            DT: '',
            status: 500
        })
    }
}

const readUser = async (req: any, res: any) => {
    try {
        const page: number = req.query.page ? parseInt(req.query.page) : 1
        const limit: number = req.query.limit ? parseInt(req.query.limit) : 10 
        // console.log('page, limit la: ', page, ', ', limit)
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
    // console.log('check data: ', req.body)
    // console.log("file info:", req.file);
    const firstName: string = req.body.firstName
    const lastName: string = req.body.lastName
    const email: string = req.body.email
    const password: string = req.body.password
    const username: string = req.body.userName
    const avatar = req.file
    const age:number = req.body.age

    const avatarPath = avatar ? `/users/avatar/${avatar.filename}` : '';

    try {
        const data = await userServece.addNewUser(firstName, lastName, email, password, username, avatarPath, age)

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

const updateUser = async (req: any, res: any) => {
    console.log('check data edit: ', req.body)
    console.log("file info edit :", req.file);
    const id: number = req.params.id
    const firstName: string = req.body.firstName
    const lastName: string = req.body.lastName
    const email: string = req.body.email
    const password: string = req.body.password
    const username: string = req.body.userName
    const avatar = req.file
    const age:number = req.body.age

    const avatarPath = avatar ? `/users/avatar/${avatar.filename}` : null;

    try {
        const data = await userServece.handleEdituser({id, email, username, firstName, lastName, password, avatarPath, age})

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

const deleteUser = async(req: any, res: any) => {
    // console.log("delete user id: ", req.body)
    const id: number = req.params.id
    try {
        const data = await userServece.deleteUserById(id)
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


module.exports = {readUser, createUser, deleteUser, readUserById, updateUser}