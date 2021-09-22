/*
    Json Object

*/
// JSON => java script Object Notation
// key & value format

var json={
    fname:"sumit",
    "lname":"Raokhande",
    id:9,
    status:true
}
/*
 here 2 ways to retrive/passing a data
    1 dot operator
    2 square operator
*/
//1 dot operator
console.log(`
Display Using Dot . Operator.
    First name  :: ${json.fname}
    Last  Name  :: ${json.lname}
    ID          :: ${json.id}
    Status      :: ${json.status}
`);

//2 Square operator
console.log(`
Display Using square[] Operator.
    First name  :: ${json["fname"]}
    Last  Name  :: ${json["lname"]}
    ID          :: ${json['id']}
    Status      :: ${json["status"]}
`);