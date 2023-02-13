import { ITransformedData } from "@/interfaces/entity.js";

export const transform = (data: Record<string, any>): ITransformedData[] => {
    let result: any = [];
    Object.entries(data).forEach(([item, value]) => {
      const keys = item.split("_");
      let nestedObject = result;
      keys.slice(0, -1).forEach(key => {
        nestedObject[key] = nestedObject[key] || {};
        nestedObject = nestedObject[key];
      });
      nestedObject.push(value);
    });
    return result;
  };