const { Schema, model } = require("mongoose");

const clienteSchema = new Schema(
  {
    name: {
      type: String,
    },
    lastname: {
      type: String,
    },
    address: {
      type: String,
    },

    localidad: {
      type: String,
    },

    telephone: {
      type: Number,
    },
    email: {
      type: String,
    },
    numeroDeCompras: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Cliente", clienteSchema);
