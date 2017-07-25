
describe('Coding Challenge ', function() {

  challenge('Implement this function that compares objects and returns true', function() {
    let obj1 = {
      fromDate: "2017-04-01T00:00:00.000Z",
      toDate: "2017-12-24T00:00:00.000Z",
      _id: "123",
      updatedAt: "2016-06-28T21:20:21.754Z",
      createdAt: "2016-06-28T21:20:21.754Z"
    }
    let obj2 = {
        fromDate: "2017-04-01T00:00:00.000Z",
        toDate: "2017-12-24T00:00:00.000Z",
        updatedAt: "2016-06-28T21:20:21.754Z",
        createdAt: "2016-06-28T21:20:21.754Z",
    }
    let result = compareObjects(obj1, obj2);

    chai.assert.deepEqual(result, true);
  });

  challenge('Implement this function that compares objects with Date methods and returns true', function() {
    let obj1 = {
      _id: "57f7019e18f4fc0300a9e6d3",
      fromDate: "2018-01-06T00:00:00.000Z",
      toDate: "2018-03-31T00:00:00.000Z",
      updatedAt: "2016-08-17T20:21:08.723Z",
      createdAt: new Date("2016-08-17T20:21:08.723Z")
    }
    let obj2 = {
      fromDate: "2018-01-06T00:00:00.000Z",
      _id: "57f7019e18f4fc0300a9e6d3",
      toDate: "2018-03-31T00:00:00.000Z",
      updatedAt: new Date("2016-08-17T20:21:08.723Z"),
      createdAt: "2016-08-17T20:21:08.723Z"
    }
    let result = compareObjects(obj1, obj2);

    chai.assert.deepEqual(result, true);
  });

  challenge('Implement this function that compares objects and returns false', function() {
    let obj1 = {
      fromDate: "not a date",
      toDate: "2017-12-24T00:00:00.000Z",
      _id: "123",
      updatedAt: "2016-06-28T21:20:21.754Z",
      createdAt: "2016-06-28T21:20:21.754Z"
    }
    let obj2 = {
        fromDate: "2017-04-01T00:00:00.000Z",
        toDate: "2017-12-24T00:00:00.000Z",
        updatedAt: "2016-06-28T21:20:21.754Z",
        createdAt: "2016-06-28T21:20:21.754Z",
    }
    let result = compareObjects(obj1, obj2);

    chai.assert.deepEqual(result, false);
  });

  challenge('Implement this function that compares arrays and should return true', function() {
    let firstArray = [
      {
        name: 'Austin',
        age: 32
      },
      {
        name: 'Lauren',
        age: 30
      },
      {
        name: 'Joseph',
        age: 26,
        gender: 'Male'
      }
    ];
    let secondArray = [
      {
        name: 'Lauren',
        age: 30
      },
      {
        name: 'Joseph',
        age: 26,
        gender: 'Male'
      },
      {
        name: 'Austin',
        age: 32
      }
    ]
    var result = compareArrays(firstArray, secondArray);

    chai.assert.deepEqual(result, true);
  });

  challenge('Implement this function that compares arrays and should return false', function() {
    let firstArray = [
      {
        name: 'Austin',
        age: 32
      },
      {
        name: 'Lauren',
        age: 28
      },
      {
        name: 'Joseph',
        age: 26,
        gender: 'Male'
      }
    ];
    let secondArray = [
      {
        name: 'Lauren',
        age: 30
      },
      {
        name: 'Joseph',
        age: 26,
        gender: 'Male'
      },
      {
        name: 'Austin',
        age: 32
      }
    ]
    var result = compareArrays(firstArray, secondArray);

    chai.assert.deepEqual(result, false);
  });

});
