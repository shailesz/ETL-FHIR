import { transformFile } from "@/controllers/transform.js";

const file = './data.csv';

const res = await transformFile(file);

console.log(res);
