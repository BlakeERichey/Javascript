schema = new SimpleSchema({
  _id:       {type: Number, decimal: true, optional: true},
  desc:      {type: String},
  weight:    {type: Number, decimal: true},
  threshold: {type: Number, decimal: true},
});

export default schema;