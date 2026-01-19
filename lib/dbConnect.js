const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URL;
const dbName = process.env.DB_NAME;

export const collections = {
  SERVICE_DATA: "serviceData",
  USERS: "users",
};
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export const dbConnect = (cname) => {
  return client.db(dbName).collection(cname);
};
