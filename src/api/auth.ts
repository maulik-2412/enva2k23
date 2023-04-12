import { client } from "../AppwriteConfig";
import { Account, AppwriteException } from "appwrite";

const account = new Account(client);

export const getCurrentUser = async () => {
  try {
    return account.get();
  } catch (error) {
    error as AppwriteException;
    throw new Error(error.message);
  }
};

export const login = async () => {
  try {
    return account.createAnonymousSession();
  } catch (error) {
    error as AppwriteException;
    throw new Error(error.message);
  }
};
