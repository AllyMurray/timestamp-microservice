const app = require('../../app');
const supertest = require('supertest');

const api = supertest(app);
const apiUrl = '/api/timestamp';

describe('when the timestamp endpoint is called', () => {
  test('a json response is returned', async () => {
    await api
      .get(`${apiUrl}/2020-01-01`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
});

describe('when the timestamp endpoint is called with an empty string', () => {
  test('the current timestamp should be returned', async () => {
    const now = new Date();
    const expectedResult = {
      unix: now.getTime(),
      utc: now.toUTCString()
    };

    const result = await api
      .get(apiUrl)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    // Due to two dates being created, one in the endpoint and one
    // to test the end point the unix timestamps aren't identical.
    // Checking that the difference is less than 10 is small enough
    // that we can assume the current timestamp was returned.
    // There may be a better way of handling this.
    expect(result.body.unix - expectedResult.unix).toBeLessThan(10);
    expect(result.body.utc).toBe(expectedResult.utc);
  });
});

describe('when the timestamp endpoint is called with a valid', () => {
  test('ISO-8601 compliant date string, the timestamp for the given string should be returned', async () => {
    const testDateString = '2020-01-01';

    const testDate = new Date(testDateString);
    const expectedResult = {
      unix: testDate.getTime(),
      utc: testDate.toUTCString()
    };

    const result = await api
      .get(`${apiUrl}/${testDateString}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    expect(result.body).toEqual(expectedResult);
  });

  test('unix timestamp string, the timestamp for the given string should be returned', async () => {
    const testDateString = '1577836800000';

    const testDate = new Date(Number(testDateString));
    const expectedResult = {
      unix: testDate.getTime(),
      utc: testDate.toUTCString()
    };

    const result = await api
      .get(`${apiUrl}/${testDateString}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    expect(result.body).toEqual(expectedResult);
  });
});

describe('when the timestamp endpoint is called with a invalid string', () => {
  test('the unix timestamp should be null and the utc string should contain "Invalid Date"', async () => {
    const expectedResult = {
      unix: null,
      utc: 'Invalid Date'
    };

    const result = await api
      .get(`${apiUrl}/invalid-string`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    expect(result.body).toEqual(expectedResult);
  });
});
