'use server'
import { pool } from '@/utils/db';
import {QueryResult} from 'mysql2/promise'
export async function _create(table: string, data: any): Promise<boolean> {    
    if (!table || !data) {
        return false
    }

    const keys = Object.keys(data);
    const values = Object.values(data);
    
    try {
        const columns = keys.join(', ');
        const placeholders = values.map(() => '?').join(', ');
        const sql = `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`;
        await pool.query(sql, values);
        return true
    } catch (error) {
        return false
    }
}

export async function _read(table: string): Promise<QueryResult> {
    const [rows] = await pool.query(`SELECT * FROM ${table}`);
    return rows;
}

export async function _update() {
    return null
}

export async function _delete() {
    return null
}