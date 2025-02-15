import { Account, Client } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67b0322f0034ac91e47e");

export const account = new Account(client);

export default client;
