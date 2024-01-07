import neo4j from 'neo4j-driver';
import jwt from 'jsonwebtoken';
import {neo4jSession} from './neo4jDriver.js'

// Utility function to verify JWT
const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
};

// CRUD Operations
export const createNode = async (token, label, properties) => {
    if (!verifyToken(token)) {
        throw new Error('Invalid or expired token');
    }

    const session = getSession();
    try {
        const result = await session.run(`CREATE (n:${label} $properties) RETURN n`, { properties });
        return result.records;
    } finally {
        await session.close();
    }
};

export const readNode = async (token, label, properties) => {
    if (!verifyToken(token)) {
        throw new Error('Invalid or expired token');
    }

    const session = getSession();
    try {
        const result = await session.run(`MATCH (n:${label} $properties) RETURN n`, { properties });
        return result.records;
    } finally {
        await session.close();
    }
};

export const updateNode = async (token, label, properties, newProperties) => {
    if (!verifyToken(token)) {
        throw new Error('Invalid or expired token');
    }

    const session = getSession();
    try {
        const result = await session.run(`MATCH (n:${label} $properties) SET n += $newProperties RETURN n`, { properties, newProperties });
        return result.records;
    } finally {
        await session.close();
    }
};

export const deleteNode = async (token, label, properties) => {
    if (!verifyToken(token)) {
        throw new Error('Invalid or expired token');
    }

    const session = getSession();
    try {
        const result = await session.run(`MATCH (n:${label} $properties) DELETE n`, { properties });
        return result;
    } finally {
        await session.close();
    }
};

