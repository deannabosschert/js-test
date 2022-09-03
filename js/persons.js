const personSchema = {
  name: (value) => typeof value == "string",
  age: (value) => typeof value == "number",
  siblings: (value) => Array.isArray(value),
  metaData: (value) => typeof value == "object",
  active: (value) => typeof value == "boolean"
};

function validateResponse(obj, schema) {
  for (let key in obj) {
    if (
      validate.findKeyorProperty(schema, key) == false || validate.checkValueType(obj, schema, key) == false
    ) {
      return false;
    }
  }
  return true;

  // return validate.findKeyorProperty(obj, schema, key)
  //   ? validate.checkValueType(obj, schema, key)
  //   : false;
}

// const validate = {
//   findKeyorProperty: (obj, schema, key) => !obj.hasOwnProperty(key) || !schema[key](obj[key]) ? false : true,
//   checkValueType: (obj, schema, key) => (!schema[key](obj[key]) ? false : true)
// };

const validate = {
  findKeyorProperty: (schema, key) => (!schema[key] ? false : true),
  checkValueType: (obj, schema, key) => (!schema[key](obj[key]) ? false : true)
};

// promise-based validation
// const validateKeys = (obj) => {
//   return new Promise((resolve, reject) => {
//     if (validateResponse(obj, personSchema)) {
//       resolve(obj);
//     } else {
//       reject(new Error("Invalid person"));
//     }
//   }).catch((err) => {
//     console.log(err);
//   });
// };

/* -------- Testing this validator ------- */

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
console.log(validateResponse(personObj, personSchema)); // James (is a string, supposed to be a string)

// Validates false
console.log(validateResponse(personObjF, personSchema)); // '12' (is a number, supposed to be a string)
