const personSchema = {
  name: (value) => typeof value == "string",
  age: (value) => typeof value == "number",
  siblings: (value) => Array.isArray(value),
  metaData: (value) => typeof value == "object",
  active: (value) => typeof value == "boolean"
};

const validator = (obj, schema) => {
  for (let key in schema) {
    return findKeyorProperty(obj, schema, key) ? checkValueType(obj, schema, key) : false;
  }
};

const findKeyorProperty = (obj, schema, key) => !obj.hasOwnProperty(key) || !schema[key](obj[key]) ? false : true;
const checkValueType = (obj, schema, key) => !schema[key](obj[key]) ? false : true;


/* -------- Testing of validator ------- */

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

// Validates true
console.log(validator(personObj, personSchema)); // James (is a string, supposed to be a string)

// Validates false
console.log(validator(personObjF, personSchema)); // '12' (is a number, supposed to be a string)
