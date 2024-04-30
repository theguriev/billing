import { safeDestr } from "destr";

const parseJSON = <T>(json: string, def = false) => {
  try {
    return safeDestr<T>(json);
  } catch (e) {
    return def;
  }
};

export default parseJSON;
