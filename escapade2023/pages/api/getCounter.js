import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("posts");

        const counter = await db.collection("counter").findOne({count: Number});

        res.json(counter);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};


