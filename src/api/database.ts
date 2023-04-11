import { Databases } from "appwrite";
import { client } from "../AppwriteConfig";

const database = new Databases(client);

export const getEvents = async () => {
  const data = await database.listDocuments(
    import.meta.env.REACT_APP_DATABASE_ID,
    import.meta.env.REACT_APP_EVENTS_COLLECTION
  );
};


export const getTeam = async () => {
  const data = await database.listDocuments(
    import.meta.env.REACT_APP_DATABASE_ID,
    import.meta.env.REACT_APP_TEAM_COLLECTION,
  );
}

export const getSponsors = async () => {
  const data = await database.listDocuments(
    import.meta.env.REACT_APP_DATABASE_ID,
    import.meta.env.REACT_APP_SPONSOR_COLLECTION,
  );
};
