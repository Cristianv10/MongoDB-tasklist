const connectDB = require("./db");
const UserModel = require("./src/models/userModel");

const createUser = async function(userData) {
  await connectDB();

  const newUser = new UserModel(userData);

  const savedUser =await newUser.save();
  return savedUser;
};

const findUsers = async function() {
  await connectDB();

  return await UserModel.find({});
};

const findUserById = async function(id) {
  await connectDB();

  return await UserModel.findById(id);
};

const deleteUserById = async function(id) {
  await connectDB();

  return await UserModel.deleteOne(id);
};

const updateUser = async function(_id, dataForUpdate) {
  await connectDB();

  return await UserModel.updateOne({_id}, dataForUpdate);
};

const CRUD = {
  createUser,
  findUsers,
  findUserById,
  deleteUserById,
  updateUser,
};

module.exports = CRUD;
