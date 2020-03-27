schema = new SimpleSchema({
  desc:      {type: String},
  weight:    {type: Number, decimal: true},
  threshold: {type: Number, decimal: true},
});

export default schema;