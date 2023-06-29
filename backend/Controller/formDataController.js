const MongoClient = require("mongodb").MongoClient;

const postData = async (req, res) => {
  try {
    await MongoClient.connect(process.env.MONGO_URL)
      .then((db) => {
        var eventName = req.body.eventName;
        var dbo = db.db("test");
        dbo.collection(`${eventName}`).insertOne(req.body);
      })
      .catch((error) => {
        console.log(error);
      });
    res.status(200).json({ db: `${req.body.eventName}`, status: "success" });
    // res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postData,
};
