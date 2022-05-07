import { validate_each_argument } from "svelte/internal";

class Column {
    pk: boolean;
    name: string;
    description: string;
}

class Table {
    name: string;
    pk: string;
    cols: [Column];
    touple(touple: object): Map<string, object> {
        const item = new Map();
        this.cols.forEach((col, i) => {
            item.set(col, touple[i]);
        })
        return item;
    }
}

async function getTuple(db, table:Table, pk:string) {
    let key = `${table.name}:${pk}`
    const { value, metadata } = await db.getWithMetadata(key);
}

async function updateTuple(db, table, pk, set) {
    let key = `${table.name}:${pk}`
    let tuple = await getTuple(db, table, pk);
    Object.keys(set).forEach((key) => {
        tuple[key] = set[key];
    });
    await db.put(key, tuple);
}

async function query(db, table, where, limit) {
    let key = `${table.name}:`
    let items = await db.list({ prefix: key });

}