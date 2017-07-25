// Write ES2015 code and import modules from npm
// and then press "Execute" to run your program.

/*
  Please write a function that checks if two objects have the same content.
*/
/* NOTES:
  1. Ignore _id.
  2. Keys in the objects are unknown to this function.
      Please don't do:
                  offerA.rate equals offerB.rate and
                  offerA.offerType equals offerB.offerType
                ...etc
  3. Write smaller functions if necessary and name them well.
  4. Write comments if necessary.
  5. Below are the two objects we want you to compare and the result should be true.
  6. WHEN COMPLETE, ACTIONS -> SAVE PRIVATE GIST, AND INCLUDE THE LINK IN THE WRITTEN INTERVIEW.
*/

// Optional: Checkout Ramda. It has already been imported in this module for you.
// import R from 'ramda';

const offerA = {
    rate: "freeOfCharge",
    bookingCode: "FREELOCAL",
    allowCombination: false,
    offerName: "Bring a Local for FREE! Promotion",
    specialConditions: "Please note, this special offer can be booked today, and is valid for travel at any time during the year except for December 24th through January 6th.",
    offerType: "Per person",
    _id: "57f7019e18f4fc0300a9e6d1",
    discountType: "percentage",
    validDatesOfTravel: [
        {
            fromDate: "2017-04-01T00:00:00.000Z",
            toDate: "2017-12-24T00:00:00.000Z",
            _id: "123",
            updatedAt: "2016-06-28T21:20:21.754Z",
            createdAt: "2016-06-28T21:20:21.754Z"
        },
        {
            _id: "57f7019e18f4fc0300a9e6d3",
            fromDate: "2018-01-06T00:00:00.000Z",
            toDate: "2018-03-31T00:00:00.000Z",
            updatedAt: "2016-08-17T20:21:08.723Z",
            createdAt: new Date("2016-08-17T20:21:08.723Z")
        }
    ],
    tags: ['free', 'multi'],
    rates: [{nett: 2, commission: '20%'}]
};
const offerB = {
    _id: "57f7019e18f4fc0300a9e6d1",
    rate: "freeOfCharge",
    bookingCode: "FREELOCAL",
    allowCombination: false,
    offerName: "Bring a Local for FREE! Promotion",
    specialConditions: "Please note, this special offer can be booked today, and is valid for travel at any time during the year except for December 24th through January 6th.",
    offerType: "Per person",
    discountType: "percentage",
    validDatesOfTravel: [
        {
            fromDate: "2018-01-06T00:00:00.000Z",
            _id: "57f7019e18f4fc0300a9e6d3",
            toDate: "2018-03-31T00:00:00.000Z",
            updatedAt: new Date("2016-08-17T20:21:08.723Z"),
            createdAt: "2016-08-17T20:21:08.723Z"
        },
        {
            fromDate: "2017-04-01T00:00:00.000Z",
            toDate: "2017-12-24T00:00:00.000Z",
            updatedAt: "2016-06-28T21:20:21.754Z",
            createdAt: "2016-06-28T21:20:21.754Z",
        }

    ],
    tags: ['multi', 'free'],
    rates: [{commission: '20%', nett: 2}]
};

// YOUR CODE STARTS HERE.
// COMPARES TWO OBJECTS
function compareObjects(obj1, obj2) {
  // LOOP THROUGH KEYS IN OBJECT 1
  for (let key in obj1) {
    // IF OBJECT 1 HAS A KEY VALUE OF OBJECT, AND THE DATE CONSTRUCTOR APPLIED TO EACH VALUE DOES NOT EQUAL EACH OTHER, RETURN FALSE
    if (typeof obj1[key] === 'object' && (obj1[key].toDateString() !== (new Date(obj2[key]).toDateString() ) ) ) {
      return false;
    // IF OBJECT 2 HAS A KEY VALUE OF OBJECT, AND THE DATE CONSTRUCTOR APPLIED TO EACH VALUE DOES NOT EQUAL EACH OTHER, RETURN FALSE
    } else if (typeof obj2[key] === 'object' && (obj2[key].toDateString() !== (new Date(obj1[key]).toDateString() ) ) ) {
      return false;
    // IF THE KEY IS NOT AN ID AND THE OBJECT KEYS ARE NOT EQUAL OR OBJECTS, RETURN FALSE
    } else if (key !== '_id' && obj1[key] !== obj2[key] && typeof obj1[key] !== 'object' && typeof obj2[key] !== 'object') {
      return false;
    }
  }
  // ALL OTHER POSSIBILITES RESULT IN THE KEY/VALUE PAIRS EQUALING ONE ANOTHER
  return true;
};

// CREATE AN ARRAY OF KEYS FROM AN OBJECT
function objToKeyArr(obj) {
  return Object.keys(obj);
}

// CREATE AN ARRAY OF VALUES FROM AN OBJECT
function objToValArr(obj) {
  return Object.values(obj);
}

// SORT THROUGH SUB-ARRAYS. THERE IS REDUNDANCY HERE THAT WOULD NEED TO BE REFACTORED.
function sortSubArrays(array) {
  array.forEach(function(item) {
    // IF AN ELEMENT IN THE ARRAY IS AN ARRAY ITSELF, SORT IT
    if (Array.isArray(item)) {
      item.sort();
    }
  });
  // SORT BY THE FIRST PROPERTY OF OBJECTS
  array.sort(function (a, b) {
    let key = Object.keys(array[0])[0];
    if (a[key] < b[key]) {
      return -1;
    } else if (b[key] < a[key]) {
      return 1;
    }
  });
}

// COMPARE THE SUB ARRAYS. VERY SIMILAR TO THE compareArray FUNCTION. HAVING A SEPARATE FUNCTION ALLOWS YOU TO JUMP OUT OF THE compareArray FUNCTION AND GET BACK IN AT THE SAME PLACE.
function compareSubArrays(arr1, arr2) {
  // SORT ANY NESTED ARRAYS
  sortSubArrays(arr1);
  sortSubArrays(arr2);
  // IF THERE ARE NOT THE SAME LENGTH, RETURN FALSE
  if (arr1.length !== arr2.length) {
    return false;
  // CREATE NEW ARRAYS THAT ARE SORTED
  } else {
    let newArr1 = arr1.sort();
    let newArr2 = arr2.sort();
    for (let i = 0; i < newArr1.length; i++) {
      // IF THEY ARE NOT OF THE SAME TYPE, RETURN FALSE
      if (typeof newArr1[i] !== typeof newArr2[i]) {
        return false;
        // IF THEY ARE ARRAYS BUT UNEQUAL, RETURN FALSE
      } else if (Array.isArray(newArr1[i]) && (!compareSubArrays(newArr1[i], newArr2[i]) ) ) {
        return false;
        // IF THEY ARE OBJECTS, NOT ARRAYS, AND UNEQUAL OBJECTS, RETURN FALSE
      } else if ( (typeof newArr1[i] === 'object') && !Array.isArray(newArr1[i]) && (!compareObjects(newArr1[i], newArr2[i]) ) ) {
        return false;
        // IF IT IS NOT AN OBJECT AND UNEQUAL, RETURN FALSE
      } else if (typeof newArr1[i] !== 'object' && newArr1[i] !== newArr2[i]) {
        return false;
      }
    }
  }
  // OTHERWISE, THE ARRAY IS EQUAL, AND SHOULD RETURN TRUE
  return true;
}

// COMPARE TWO ARRAYS
function compareArrays(arr1, arr2) {
  // SORT ANY NESTED ARRAYS
  sortSubArrays(arr1);
  sortSubArrays(arr2);
  // IF THE LENGHTS ARE UNEQUAL, RETURN FALSE
  if (arr1.length !== arr2.length) {
    return false;
    // CREATE NEW ARRAYS THAT ARE SORTED
  } else {
    let newArr1 = arr1.sort();
    let newArr2 = arr2.sort();
    for (let i = 0; i < newArr1.length; i++) {
      // IF THEY ARE OF UNEQUAL TYPES, RETURN FALSE
      if (typeof newArr1[i] !== typeof newArr2[i]) {
        return false;
        // IF THEY ARE ARRAYS, BUT UNEQUAL, RETURN FALSE
      } else if (Array.isArray(newArr1[i]) && (!compareSubArrays(newArr1[i], newArr2[i]))) {
        return false;
        // IF THEY ARE OBJECTS, NOT ARRAYS, BUT UNEQUAL, RETURN FALSE
      } else if ( (typeof newArr1[i] === 'object') && !Array.isArray(newArr1[i]) && (!compareObjects(newArr1[i], newArr2[i]) ) ) {
        return false;
        // IF THEY ARE NOT OBJECTS AND UNEQUAL, RETURN FALSE
      } else if (typeof newArr1[i] !== 'object' && newArr1[i] !== newArr2[i]) {
        return false;
      }
    }
  }
  // OTHERWISE, RETURN TRUE
  return true;
}

let keyArr1 = objToKeyArr(offerA);
let keyArr2 = objToKeyArr(offerB);
let valArr1 = objToValArr(offerA);
let valArr2 = objToValArr(offerB);

console.log(compareArrays(keyArr1, keyArr2));
console.log(compareArrays(valArr1, valArr2));
