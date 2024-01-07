import neo4j from 'neo4j-driver';
import { env } from "$env/dynamic/private"
import jwt from 'jsonwebtoken';

const uri = "bolt://localhost:7687";
const user = "neo4j";
const password = env.NEO4J_PASSWORD;

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

export const neo4jSession = () => {
    return driver.session();
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        throw new Error('Invalid or expired token');
    }
};
