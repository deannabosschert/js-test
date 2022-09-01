const personSchema = {
  name: (value) => typeof value == "string",
  age: (value) => typeof value == "number",
  siblings: (value) => Array.isArray(value),
  metaData: (value) => typeof value == "object",
  active: (value) => typeof value == "boolean"
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
    if (!obj.hasOwnProperty(key)) { // checks if the object has the key, or if it's a property of the object
      return false;
    } else { // checks value of the key against the schema
      if (!schema[key](obj[key])) {
        return false;
      } else {
        return true;
      }
    }
  }
};

// Validates true
console.log(validator(personObj, personSchema)); // James (is a string, supposed to be a string)

// Validates false
console.log(validator(personObjF, personSchema)); // '12' (is a number, supposed to be a string)
