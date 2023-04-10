import { Client } from "appwrite";

require("dotenv").config();

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.REACT_APP_PROJECT_ID);
