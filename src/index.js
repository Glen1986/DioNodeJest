"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes_1 = require("./routes");
var server = (0, express_1["default"])();
server.use(express_1["default"].json());
server.use(routes_1.routes);
server.listen(5000, function () {
    console.log('server at 5000 door');
});
