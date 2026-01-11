"use server";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
export const getService = async () => {
  const services = await dbConnect(collections.SERVICE_DATA).find().toArray();
  return services;
};
export const getSingleService = async (id) => {
  if (!id || id.length != 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };
  const service = await dbConnect(collections.SERVICE_DATA).findOne(query);
  return service || {};
};
