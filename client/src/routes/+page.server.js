import { env } from "$env/dynamic/private"

export const load = async(req,res) => {
    return {
        hello:"world",
        pwd: env.NEO4J_PASSWORD
    }
}
