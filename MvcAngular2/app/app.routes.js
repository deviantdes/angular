"use strict";
var index_1 = require("./directory/index");
var index_2 = require("./directory2/index");
var router_1 = require('@angular/router');
// Component
var routes = [
    // Root
    { path: 'directory', component: index_1.DirectoryComponent },
    { path: 'directory2', component: index_2.Directory2Component }
];
// - Updated Export
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map