'use server'
import { pool } from '@/utils/db';
import {QueryResult, ResultSetHeader} from 'mysql2/promise'
export async function _create(table: string, data: any): Promise<number> {    
    if (!table || !data) {
        return -1
    }

    const keys = Object.keys(data);

    const values = Object.values(data).map(value => typeof value === 'object' ? JSON.stringify(value) : value);
    try {
        const columns = keys.join(', ');
        const placeholders = values.map(() => '?').join(', ');
        const sql = `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`;
        const [result] = await pool.query<ResultSetHeader>(sql, values);
        return result.insertId
    } catch (error) {
        console.log(error)
        return -1
    }
}

export async function _read(table: string): Promise<any[]> {
    const [rows] = await pool.query(`SELECT * FROM ${table}`);
    return rows as any[];
}

export async function _update() {
    return null
}

export async function _delete() {
    return null
}