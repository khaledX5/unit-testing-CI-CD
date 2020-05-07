const square_service = require('../services/squareService');

test('get square area if length/width equal 10 the area will be equal 100', () => {
  let body = {
    "length":20,
    "width":20
  };
  expect(square_service.calculateArea(body)).toBe(400);
});