import { Client } from "appwrite";
import { Constants } from "./utils/constants";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(Constants.PROJECT_ID);
