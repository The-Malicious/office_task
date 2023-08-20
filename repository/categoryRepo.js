const db = require("../db");
const { category } = db;

exports.list = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const allData = await category.find({deleted_at:null});
      resolve(allData);
    } catch (error) {
      reject(error);
    }
  });
};

exports.add = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newData = await new category(params);
      const data = newData.save();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

exports.delete = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await category.findOneAndUpdate(
        { _id: params?.id, deleted_at: null },
        { $set: { deleted_at: new Date() } },
        { new: true }
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

exports.update = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await category.findOne({
        _id: params?.id,
        deleted_at: null,
      });
      if (data) {
        const updatedData = await category.findByIdAndUpdate(
          params.id,
          {
            ...params,
            updated_at: new Date(),
          },
          { new: true }
        );
        resolve(updatedData);
      } else {
        reject({ message: "Data not found." });
      }
    } catch (error) {
      reject(error);
    }
  });
};
