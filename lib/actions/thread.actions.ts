"use server"

import { revalidatePath } from "next/cache";
import Thread from "../models/thread.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";


interface Params {
    text: string,
    author: string,
    communityId: string | null,
    path: string,
}

export async function createThread({ text, author, communityId, path }: Params) {

    try {
        connectToDB();

        const createdThread = await Thread.create({
            text,
            author,
            commnity: null,
        });

        // Update User model
        await User.findByIdAndUpdate(author, {
            $push: { threads: createdThread._id },
        });

        revalidatePath(path);
    } catch (error: any) {
        throw new Error(`Error creating thread: ${error.message}`);
    }

}

export async function fetchPosts(pageNumber = 1, pageSize = 20) {
    connectToDB();

    //Calcilate the number of posts to skip
    const skipAmount = (pageNumber - 1) * pageSize;

    //Fetch the posts that have no parents (Top-Level Threads!)!
    const postQuery = Thread.find({ parentId:{$in:[null, undefined]}})
    .sort({ createdAt: 'desc' }) // will show posts/threads descending 
    .skip(skipAmount)
    .limit(pageSize)
    .populate({path: 'author', model: User})
    .populate({
        path: 'children',
        populate: {
            path: 'author',
            model: User,
            select: "_id name parentId image"
        }
    })

    const totalPostCount = await Thread.countDocuments({ parentId:{ $in:[null, undefined]}})

    const posts = await postQuery.exec();

    const isNext = totalPostCount > skipAmount + posts.length;

    return {posts, isNext}
}

