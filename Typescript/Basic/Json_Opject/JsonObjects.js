/*
    Json Object

*/
// JSON => java script Object Notation
// key & value format
var json = {
    fname: "sumit",
    "lname": "Raokhande",
    id: 9,
    status: true
};
/*
 here 2 ways to retrive/passing a data
    1 dot operator
    2 square operator
*/
//1 dot operator
console.log("\nDisplay Using Dot . Operator.\n    First name  :: " + json.fname + "\n    Last  Name  :: " + json.lname + "\n    ID          :: " + json.id + "\n    Status      :: " + json.status + "\n");
//2 Square operator
console.log("\nDisplay Using square[] Operator.\n    First name  :: " + json["fname"] + "\n    Last  Name  :: " + json["lname"] + "\n    ID          :: " + json['id'] + "\n    Status      :: " + json["status"] + "\n");
