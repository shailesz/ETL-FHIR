export const createObservationTable = async function () {

    const db = global.app.database;

    const exists = db.query("SELECT name FROM sqlite_master WHERE type='table' AND name='observations'").values();

    if (!exists) {
        db.run(
            `
            CREATE TABLE observations (
                obs_id TEXT PRIMARY KEY,
                data JSONB
            )        
            `
          );

        console.log("Table observations created successfully!");
        return;
    }

    console.log("Table observations already exists, skipping...");
    return;

};
