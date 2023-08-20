const product = require("../repository/productRepo");

exports.list = async (req, res) => {
  product
    .list(req.body)
    .then((response) => {
      return res.send({ status: 201, message: "fetched", data: response });
    })
    .catch((err) => {
      return res.send({ status: 500, message: err.message });
    });
};

exports.add = async (req, res) => {
  product
    .add(req.body)
    .then((response) => {
      return res.send({ status: 201, message: "added", data: response });
    })
    .catch((err) => {
      return res.send({ status: 500, message: err.message });
    });
};

exports.delete = async (req, res) => {
  product
    .delete(req.body)
    .then((response) => {
      return res.send({ status: 201, message: "deleted", data: response });
    })
    .catch((err) => {
      return res.send({ status: 500, message: err.message });
    });
};

exports.update = async (req, res) => {
  product
    .update(req.body)
    .then((response) => {
      return res.send({ status: 201, message: "update", data: response });
    })
    .catch((err) => {
      return res.send({ status: 500, message: err.message });
    });
};
