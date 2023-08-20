const category = require("../repository/categoryRepo");

exports.list = async (req, res) => {
  category
    .list(req.body)
    .then((response) => {
      return res.send({ status: 201, message: "fetched", data: response });
    })
    .catch((err) => {
      return res.send({ status: 500, message: err.message });
    });
};

exports.add = async (req, res) => {
  category
    .add(req.body)
    .then((response) => {
      return res.send({ status: 201, message: "added", data: response });
    })
    .catch((err) => {
      return res.send({ status: 500, message: err.message });
    });
};

exports.delete = async (req, res) => {
  category
    .delete(req.body)
    .then((response) => {
      return res.send({ status: 201, message: "deleted", data: response });
    })
    .catch((err) => {
      return res.send({ status: 500, message: err.message });
    });
};

exports.update = async (req, res) => {
  category
    .update(req.body)
    .then((response) => {
      return res.send({ status: 201, message: "update", data: response });
    })
    .catch((err) => {
      return res.send({ status: 500, message: err.message });
    });
};
