// api/newObject

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const newObject = req.body;

  const pass = newObject.pass;

  if (pass !== "7H4*S$L5yy@^BZ") {
    console.log("wrong pass");
    return;
  }

  if (req.method === "POST") {
    try {
      const {
        type,
        link,
        m2,
        location,
        price,
        exactAddres,
        keyFeatures,
        photos,
        description,
      } = newObject;

      const client = await MongoClient.connect(
        "mongodb+srv://Vlad_Father_Storage:NsF4yqDYj1WK8afo@cluster-father-storage.dfze9yi.mongodb.net/fatherStorageObjects?retryWrites=true&w=majority"
      );
      const db = client.db();

      const objectsCollection = db.collection("fatherStorageObjects");

      const result = await objectsCollection.insertOne({
        type,
        link,
        m2,
        location,
        price,
        exactAddres,
        keyFeatures,
        photos,
        description,
      });

      res.status(201).json({ message: "Object added!" });

      client.close();
    } catch (e) {
      client.close();
      throw new Error(`something went wrong: ${e}`);
    }
  }
}
