export interface User {
    id: number,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    password: string,
    username: string,
    avatar?: string | null,
    age?: number | null
}