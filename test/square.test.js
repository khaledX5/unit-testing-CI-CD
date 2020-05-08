const square_service = require('../services/squareService');

test('get square area if length/width equal 10 the area will be equal 100',getSquareArea );




function getSquareArea(){
    let body = {
      "length":20,
      "width":20
    };
    expect(square_service.calculateArea(body)).toBe(1);
}