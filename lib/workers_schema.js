workers = new Mongo.Collection("workers");
workers.attachSchema(new SimpleSchema({
  firstName: {
    type: String,
    label: "First Name",
    max: 200
  },
  lastName: {
    type: String,
    label: "Last Name",
    max: 200
  },
  address: {
    type: String,
    label: "Address",
    max: 200
  },
  city: {
    type: String,
    label: "City",
    max: 200
  },
  state: {
    type: String,
    label: "State",
    max: 200
  }
}));