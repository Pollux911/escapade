import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("posts");
        const { id } = req.query;
        const { count } = req.body;

        const post = await db.collection("counter").updateOne(
            { count: Number },
            { $set: {count: 0}  }
        );

        res.json(post);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};