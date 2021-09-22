
var stuobj=[
    {   rollno : 9, sname:"Sumit",   lname:"Raokhande",
        country: {  cid:1,  cname:"India"   },
        marks:
        [   {   year:"1st Year",    spga:5.5    },
            {   year:"2nd Year",    spga:6.5    },
            {   year:"3ed Year",    spga:6.0    },
            {   year:"4th Year",    spga:7.0    }
        ]
    },
    {   rollno : 3, sname:"Kiran",  lname:"Sharma",
        country: {  cid:1,  cname:"India"   },
        marks:
        [   {   year:"1st Year",    spga:6.5    },
            {   year:"2nd Year",    spga:7.0    },
            {   year:"3ed Year",    spga:7.5    },
            {   year:"4th Year",    spga:7.5    }
        ]
    },
    {   rollno : 6, sname:"Dipak",  lname:"Gavhale",
        country: {   cid:1,  cname:"India"   },
        marks:
        [   {   year:"1st Year",    spga:6.0    },
            {   year:"2nd Year",    spga:6.5    },
            {   year:"3ed Year",    spga:6.8    },
            {   year:"4th Year",    spga:7.0    }
        ]
    }    
];
var rno:number=6;
console.log(`\nFind the Student recode of Roll Number : ${rno}`)
var count=0;
for (let i = 0; i < stuobj.length; i++) { 
    var R:any = `${stuobj[i].rollno}`
    if  (R == rno){  
        count++; 
        console.log(`
        Student Roll No. :: ${stuobj[i].rollno}
        First name       :: ${stuobj[i].sname}
        Last  Name       :: ${stuobj[i].lname}
        Country Name     :: ${stuobj[i].country.cname}
        Mark             :: Year       &  SGPA`) ;               
        for (let j = 0; j < stuobj[i].marks.length; j++) { 
            console.log(`                            ${stuobj[i].marks[j].year}   :: ${stuobj[i].marks[j].spga}`)            
        }
    }
}
if(count == 0){
    console.log(`Recode of roll number ${rno} is not available` );
}