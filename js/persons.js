// const personSchema = {
//     name: 'string',
//     age: 'number',
//     siblings: 'array',
//     metaData: 'object',
//     active: 'boolean'
//  }

const personSchema = {
  name: (value) => {
    if (typeof value == "string") {
      return true;
    } else {
      return false;
    }
  }
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
  name: "James",
  age: 25,
  active: true
};
