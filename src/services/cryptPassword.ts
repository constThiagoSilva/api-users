import bcrypt from 'bcrypt'

interface CryptPasswordDTO{
    password: string;
    rounds: number;
}

export const cryptPassword = async ({password, rounds}: CryptPasswordDTO): Promise<string> => {
    return await bcrypt.hash(password, rounds)
}