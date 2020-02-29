import Datastore from "nedb-promises";

// console.log(__dirname);

const dbFactory = (fileName: string) => {
  // eslint-disable-next-line no-console

  return Datastore.create({
    filename: `./db/${fileName}`,
    timestampData: true,
    autoload: true,
  });
};

export const db = {
  questions: dbFactory("questions.db"),
  results: dbFactory("results.db"),
};

export type DBType = typeof db;
