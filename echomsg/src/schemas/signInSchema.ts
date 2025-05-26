import {z} from "zod"

export const sginInSchema = z.object({
    identifier: z.string(),
    password: z.string(),
})