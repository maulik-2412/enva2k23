import { AppwriteException, Databases } from "appwrite";
import { client } from "../AppwriteConfig";
import { Constants } from "../utils/constants";
import { Event } from "../models/event";
import { EventDay } from "../utils/enums";

const database = new Databases(client);

export const getEvents = async (): Promise<Event[]> => {
  try {
    const data = await database.listDocuments(
      Constants.DATABASE_ID,
      Constants.EVENTS_COLLECTION
    );
    return data.documents.map<Event>((event) => ({
      event_name: event.event_name,
      event_description: event.event_description,
      event_image_id: event.event_image_id,
      day: event.day,

    }))
  } catch (error) {
    error as AppwriteException;
    console.error(error);
    throw new Error(error.message);
  }

};


export const getTeam = async () => {

  try {
    const data = await database.listDocuments(
      Constants.DATABASE_ID,
      Constants.TEAM_COLLECTION,
    );
  } catch (error) {
    error as AppwriteException;
    console.error(error);
  }


}

export const getSponsors = async () => {
  try {
    const data = await database.listDocuments(
      Constants.DATABASE_ID,
      Constants.SPONSOR_COLLECTION,
    );
  } catch (error) {
    error as AppwriteException;
    console.error(error);
  }

};
