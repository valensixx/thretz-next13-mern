import { connectToDB } from "../mongoose";

interface Params {
    text: string,
    autor: string,
    communityId: string | null,
    path: string,
}

export async function createThread({ text, autor, communityId, path}: Params){
    connectToDB();

     const creatrdThread = await Thread.create();
}
    
