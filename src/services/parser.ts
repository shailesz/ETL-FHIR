import { ITransformedData } from "@/interfaces/entity.js";

export const transform = (data: Record<string, any>[]): ITransformedData[] => {
  return data.map((item: Record<string, any>) => {
    let result = {} as typeof item;

    Object.keys(item).forEach((key) => {
      const path = key.split("_");

      let current = result;
      for (let i = 0; i < path.length; i++) {
        let part = path[i];
        if (!current[part]) {
          current[part] = {};
        }

        if (i === path.length - 1) {
          current[part] = item[key];
        } else {
          current = current[part];
        }
      }
    });

    return result as ITransformedData;
  });
};
