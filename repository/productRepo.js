const db = require("../db");
const { product } = db;

exports.list = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const allData = await product.find({ deleted_at: null });
      resolve(allData);
    } catch (error) {
      reject(error);
    }
  });
};

exports.add = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newData = await new product(params);
      const data = newData.save();

      // if (data) {
      //   const recentData = await product.aggregate([
      //     { $sort: { created_at: -1 } },
      //   ]);
      //   console.log(recentData);
      // }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

exports.delete = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await product.findOneAndUpdate(
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
      const data = await product.findOne({
        _id: params?.id,
        deleted_at: null,
      });
      if (data) {
        const updatedData = await product.findByIdAndUpdate(
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
