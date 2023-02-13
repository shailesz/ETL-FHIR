import { createObservationTable } from "./tables/create.js";

const seed = async function () {
    try {
        await createObservationTable();
    } catch (error) {
        console.log(error);
    } finally {
        global.app.database.close();
    }
}

export default seed;
