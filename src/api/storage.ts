import { AppwriteException, Models, Storage } from "appwrite";
import { client } from "../AppwriteConfig";



const storage: Storage = new Storage(client);

export const getFilePreview = async (bucketId: string, fileId: string): Promise<URL> => {
    try {
        const data = await storage.getFilePreview(bucketId, fileId);
        return data;
    } catch (error) {
        error as AppwriteException;
        console.error(error);
        throw new Error(error.message);
    }
}

export const listFiles = async (bucketId: string): Promise<Models.FileList> => {
    try {
        const data = await storage.listFiles(bucketId);
        return data;
    } catch (error) {
        error as AppwriteException;
        console.error(error);
        throw new Error(error.message);
    }
}