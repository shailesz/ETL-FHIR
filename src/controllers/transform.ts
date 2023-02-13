import { parse } from "papaparse";
import { createReadStream } from "fs";
import { transform } from "@/services/parser.js";
import { ITransformedData } from "@/interfaces/entity.js";

export const transformFile = (file: string): Promise<ITransformedData[]> => {
  const res: Promise<ITransformedData[]> = new Promise((resolve, reject) => {
    try {
      const rs = createReadStream(file);

      parse(rs, {
        header: true,
        dynamicTyping: true,
        worker: true,
        complete: (result) => {
          const obj: Array<ITransformedData> = transform(result.data as Record<string, any>[]);

          resolve(obj);
        },
      });
    } catch (error) {
      reject(error);
    }
  });

  return res;
};
