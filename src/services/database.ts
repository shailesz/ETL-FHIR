import { ITransformedData } from "@/interfaces/entity.js";

export const insertManyToDB = async (jsonData: ITransformedData[]) => {
  try {
    const db = global.app.database;

    const insert = db.prepare("INSERT INTO observations (obs_id, data) VALUES ($id, $data)");

    const insertMany = db.transaction((jsonData: ITransformedData[]) => {
      for (const item of jsonData) {
        insert.run({$id: item.observation.id, $data: JSON.stringify(item)});
      };

      console.log("Insert complete!")
    });

    return insertMany(jsonData);
  } catch (error) {
    console.log(error);
  }
};
