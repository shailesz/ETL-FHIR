import { transformFile } from "@/controllers/transform.js";
import { insertManyToDB } from "@/services/database.js";
import {Database} from "bun:sqlite";

global.app = {
    ...global.app,
    database: new Database("db.sqlite"),
};

const file = './data.csv';

const res = await transformFile(file);

insertManyToDB(res);
