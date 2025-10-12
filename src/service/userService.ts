const db = require('../models/index')

import type {User} from '../typeModel/userType'

interface userCheckData {
            totalRows: number,
            totalPages: number,
            users: User[]
        }

const getListUser = async (page: number, limit: number) => {
    try {
        let offset = (page-1) * limit
        let { count, rows } = await db.User.findAndCountAll({
                                // attributes: ["id", "name", "userName", "email", "groupId", "phone", "sex"],
                                // include: {model: db.Group, attributes: ['name', 'description']},
                                raw: true,
                                nest: true,
                                offset: offset,
                                limit: limit
        });
        const pageCount = Math.ceil(count / limit);
        console.log('uers la: ', rows)
        let data: userCheckData = {
            totalRows : count,
            totalPages : pageCount,
            users : rows 
        }

        if (data.users) {
            return {
                EM: "get successfuly data",
                EC: 0,
                DT: data
            }
        }

        return {
                EM: "get successfuly data",
                EC: 0,
                DT: []
        }
        
    } catch (error) {
        console.log(error)
    }
}

const addNewUser = async (firstName: string, lastName: string, email: string, hashPassword: string, userName: string, avatar: string, age: string) => {
    try {
        const user: User[] = await db.User.create({
                                                    firstName: firstName, 
                                                    lastName: lastName, 
                                                    email: email, 
                                                    password: hashPassword, 
                                                    userName: userName, 
                                                    avatar: avatar, 
                                                    age: age});
        if (user) {
            return {
                EM: "get successfuly data",
                EC: 0,
                DT: user
            }
        }

        return {
                EM: "get successfuly data",
                EC: 0,
                DT: []
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getListUser, addNewUser}