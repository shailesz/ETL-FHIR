import migrate from "@/migrations/migrate.js";
import seed from "@/migrations/seed.js";
import {Database} from "bun:sqlite";

global.app = {
    ...global.app,
    database: new Database("db.sqlite"),
};

switch (process.argv[2]) {
    case 'migrate':
        migrate();
        break;
    case 'seed':
        seed();
        break;
    default:
        console.log("incorrect params");
        break;
}
