enum ORDER {
    ASC='asc',
    DESC='desc'
}
interface listProps {
    keys?:string[]
    from:string
    orderBy?:[string, ORDER]
    filter?:Function
    limit?:number
    cursor?:any
}

enum KeyType {
    TEXT='text',
    INT='int',
    FLOAT='float',
    NUMBER='number',
    BOOL='bool'
}

interface Models {
    [collection:string]: {
        [key:string]: {
            type:KeyType;
            index?: ORDER[]
        }
    }
}

// pk: ['sdf', 'sdf']

class KVDatabase {
    private store
    private models:Models

    constructor(store, models) {
        this.store = store
        this.models = models

        Object.entries(models);

    }

    get(collection:string, id:any) {
        const path = `${this.path(collection, id)}`
        return this.store.get(path);
    }

    async list(props:listProps) {
        const collection:string = props.from;
        const index:string = (props.orderBy && props.orderBy[0]) || 'id'
        const dir:ORDER = (props.orderBy && props.orderBy[1]) || ORDER.ASC
        
        if(!(collection in this.models)) {
            return Promise.reject(
                `The collection ${collection} doesn\'t exits`
            )
        }
        const collectionModel = this.models[collection]

        if(!(index in collectionModel)) {
            return Promise.reject(
                `The key ${index} in collection ${collection} doesn\'t exits`
            )
        }
        const indexModel = collectionModel[index]

        if(!indexModel.index || indexModel.index.indexOf(dir) == -1) {
            return Promise.reject(
                `The collection ${collection} doesn\'t contains the index for [orderBy ${index} ${dir}]`
            )
        }

        // The path where the data is
        const path = `${this.path(collection, index, dir)}`

        let storeListArgs = { prefix: path }
        if(props.limit) {
            storeListArgs['limit'] = props.limit
        }

        let items = []
        let results:{
            keys:{name:string, expiration?:number, metadata?:object}[],
            list_complete:boolean,
            cursor?:any
        };
        let cursor;
        do {
            if(cursor) {
                storeListArgs['cursor'] = cursor;
            }
            results = await this.store.list(path, storeListArgs);
            results.keys.forEach((key) => {
                try {
                    if(
                        (props.filter && props.filter(key.metadata))
                        || !props.filter
                    ) {
                        items.push(key.metadata);
                    }
                } catch(err) {
                    return Promise.reject(err);
                }
            });
            cursor = results.cursor;
        } while(!results.list_complete);

        return items;

    }

    add(table:string, item:object): Promise<void> {
        const model:object = this.models[table]
        // check props
        let curatedItem:Map<string, any> = new Map()
        Object.entries(model).forEach(([key, keyDef]) => {
            if(!(key in item) && keyDef.type.indexOf('(') !== -1) {
                return Promise.reject(new Error(`key ${String(key)} is not in item for table ${table}`))
            }
            curatedItem.set(key, item[key])
        })
        return Promise.resolve()
    }

    private path(collection: string, index='id', dir='asc', value?: string):string {
        return `/${collection}/${index}/${dir}` + (value && `/${value}` || '')
    }

}

// example
let db = new KVDatabase('test', 'models test');

db.list({
    collection: 'posts',
    orderBy: ['fechaPub', ORDER.DESC],
    filter: (item) => {
        return item.destacado
    },
    limit: 10
})

db.list({
    collection: 'posts',
    orderBy: ['nLecturas', ORDER.DESC],
    limit: 10
})

export {}
////////////////////////////
interface Collection {
    name: string
    id: string
    version:number
    fields: Map<string,Field>
}

enum FielTypes {
    STRING,
    NUMBER,
    BOOLEAN,
    INTEGER,
    FLOAT,
    DATETIME,
    DATE,
    TIME
}

interface Field {
    type: FielTypes
    size?: number,
    meta?: boolean
    index?: boolean
}

var store;

function makePath(collection: Collection, key: string, value: string):string {
    return `/${collection.id}/${collection.version}/${key}/${value}`
}

function defineCollection(collection: Collection) {

    let stores = {
        "principal":null
    }

    let indexes = new Map<string,Field>();
    
    collection.fields.forEach((field, key) => {
        if(field.index) {
            indexes[key] = field
        }
    });

    () => {

        async function get(id) {
            const path = makePath(collection, 'id', id);
            const item = await stores.principal.get(path);
            return item;
        }

       async function getBatch(ids:Array<string>) {
           ids.map(get)
       }

        async function add(id: string, item: Map<string, any>) {
            const path = makePath(collection, 'id', id);
            await stores.principal.put(path, item);
            for(let [key, value] of item) {
                if(indexes.has(key)) {
                    await stores[key].put(`/${collection.id}/${key}/${value}`, item);
                }
            }
        }
    
        async function list(query) {
            'name=sdfsdf&sdf=>2324sdfs'
        }

    };

}
