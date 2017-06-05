import { Mongo } from 'meteor/mongo';

export const Transactions = new Mongo.Collection("transactions");
export const Categories = new Mongo.Collection("categories");
