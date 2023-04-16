import { AppwriteException, Databases } from "appwrite";
import { client } from "../AppwriteConfig";
import { Constants } from "../utils/constants";
import { Event } from "../models/event";
import { Sponsor } from "../models/sponsor";
import { Team } from "../models/team";
import { Gallery } from "../models/gallery";

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


export const getTeamList = async (): Promise<Team[]> => {

  try {
    const data = await database.listDocuments(
      Constants.DATABASE_ID,
      Constants.TEAM_COLLECTION,
    );
    return data.documents.map<Team>((team) => ({

      name: team.name,
      designation: team.designation,
      image_id: team.image_id,
      facebook: team.facebook,
      twitter: team.twitter,
      linkedin: team.linkedin,
      github: team.github,
      instagram: team.instagram,
      website: team.website,

    }))
  } catch (error) {
    error as AppwriteException;
    console.error(error);
    throw new Error(error.message);
  }


}

export const getSponsors = async (): Promise<Sponsor[]> => {
  try {
    const data = await database.listDocuments(
      Constants.DATABASE_ID,
      Constants.SPONSOR_COLLECTION,
    );
    return data.documents.map<Sponsor>((spon) => ({
      image_id: spon.image_id,
      sponsor_name: spon.name,

    }))
  } catch (error) {
    error as AppwriteException;
    console.error(error);
    throw new Error(error.message);
  }
};

export const getGallery = async (): Promise<Gallery[]> => {
  try {
    const data = await database.listDocuments(
      Constants.DATABASE_ID,
      Constants.GALLERY_COLLECTION,
    );
    return data.documents.map<Gallery>((gallery) => ({
      event_name: gallery.event_name,
      event_image_id: gallery.event_img_id,
      url: gallery.url,
    }))
  } catch (error) {
    error as AppwriteException;
    console.error(error);
    throw new Error(error.message);
  }
}
