// const personSchema = {
//     name: 'string',
//     age: 'number',
//     siblings: 'array',
//     metaData: 'object',
//     active: 'boolean',
//  }

const personSchema = {
  name: (value) => typeof value == "string"
};

// Validates true
const personObj = {
  name: "James",
  age: 25,
  siblings: ["Johnnathan"],
  metaData: {},
  active: true
};

// Validates false
const personObjF = {
  name: 12,
  age: 25,
  active: true
};

const validator = (obj, schema) => {
  for (let key in schema) {
    if (schema[key](obj[key])) {
      return true;
    }
  }
  return false;
};
