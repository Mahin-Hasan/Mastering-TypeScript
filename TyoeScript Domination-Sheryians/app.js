"use strict";
let arr = [1, 2, 3, "Rocky"];
let arr2 = [1, 2, 3, "Rocky", { name: "Mahin" }, { name: 12 }];
//tuples
let arr3 = [12, "mahin"];
//enums
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
let a; // declaring a will store number type 
a = 23;
// unknown and any
// when working with unknown we have to explicitely declare what type of variable we will be working with in the future
let v, unknown;
v = 15,
    v = 'vicky';
v.toUpperCase();
