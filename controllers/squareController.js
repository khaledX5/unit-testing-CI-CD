const square_service = require('../services/squareService');
// count area
exports.getArea = function(req, res) {
    const square = req.body;
    const area = square_service.calculateArea(square);
    res.json({ area });
};

