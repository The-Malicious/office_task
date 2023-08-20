const db = require("../db");
const { tag } = db;

exports.list = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const allData = await tag.find({deleted_at:null});
      resolve(allData);
    } catch (error) {
      reject(error);
    }
  });
};

exports.add = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newData = await new tag(params);
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
      const data = await tag.findOneAndUpdate(
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
      const data = await tag.findOne({
        _id: params?.id,
        deleted_at: null,
      });
      if (data) {
        const updatedData = await tag.findByIdAndUpdate(
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
