/*
    Array of object
*/
var arrobj = [
    {
        fname: "Sumit",
        lname: "Raokhande",
        id: 9,
        country: {
            cid: 1,
            cname: "India"
        },
        month: ["Jan", "Feb", "March", "April"],
        data: [
            {
                subj: "M1",
                marks: 55
            },
            {
                subj: "M2",
                marks: 65
            },
            {
                subj: "VLSI",
                marks: 69
            }
        ]
    },
    {
        fname: "Kiran",
        lname: "Raokhande",
        id: 6,
        country: {
            cid: 3,
            cname: "US"
        },
        month: ["Jan", "Feb", "March"],
        data: [
            {
                subj: "M1",
                marks: 68
            },
            {
                subj: "M2",
                marks: 70
            },
            {
                subj: "VLSI",
                marks: 80
            }
        ]
    },
    {
        fname: "Spruha",
        lname: "Raokhande",
        id: 3,
        country: {
            cid: 2,
            cname: "Japan"
        },
        month: ["Jan", "Feb"],
        data: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 75
            },
            {
                subj: "VLSI",
                marks: 79
            }
        ]
    }
];
console.log("Dispaly data :\n");
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n    First name  :: " + arrobj[i].fname + "\n    Last  Name  :: " + arrobj[i].lname + "\n    ID          :: " + arrobj[i].id + "\n    Country Name:: " + arrobj[i].country.cname + "\n    Month       :: " + arrobj[i].month + "   \n    ");
    for (var j = 0; j < arrobj[i].data.length; j++) {
        console.log("\n        Marks     & Subject\n        Subj Name :: " + arrobj[i].data[j].subj + "\n        Marks     :: " + arrobj[i].data[j].marks + "\n        ");
    }
}
