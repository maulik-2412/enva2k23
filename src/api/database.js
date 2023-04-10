import { Databases } from "appwrite";
import { client } from "../appwrite";
import { isEmptyObject } from "jquery";

const database = new Databases(client);

export const getEvents = async () => {
  const data = await database.listDocuments(
    process.env.REACT_APP_DATABASE_ID,
    process.env.REACT_APP_EVENTS_COLLECTION
  );
};


export const getTeam = async () => {
     const data = await database.listDocuments(
       process.env.REACT_APP_DATABASE_ID,
       process.env.REACT_APP_TEAM_COLLECTION,
     );
}

export const getSponsors = async () => {
  const data = await database.listDocuments(
    process.env.REACT_APP_DATABASE_ID,
    process.env.REACT_APP_SPONSOR_COLLECTION,
  );
};
