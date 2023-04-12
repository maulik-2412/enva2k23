import { AppwriteException, Databases } from "appwrite";
import { client } from "../AppwriteConfig";

const database = new Databases(client);

export const getEvents = async () => {
  try {
    const data = await database.listDocuments(
      import.meta.env.REACT_APP_DATABASE_ID,
      import.meta.env.REACT_APP_EVENTS_COLLECTION
    );
  } catch (error) {
    error as AppwriteException;
    console.error(error);
  }

};


export const getTeam = async () => {

  try {
    const data = await database.listDocuments(
      import.meta.env.REACT_APP_DATABASE_ID,
      import.meta.env.REACT_APP_TEAM_COLLECTION,
    );
  } catch (error) {
    error as AppwriteException;
    console.error(error);
  }


}

export const getSponsors = async () => {
  try {
    const data = await database.listDocuments(
      import.meta.env.REACT_APP_DATABASE_ID,
      import.meta.env.REACT_APP_SPONSOR_COLLECTION,
    );
  } catch (error) {
    error as AppwriteException;
    console.error(error);
  }

};
