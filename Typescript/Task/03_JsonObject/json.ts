/*
    Task # 3
    Create industry json object has key status, data & error check if status is success, then parse the data
    & display it, in data key should be minimum has 5 objects. Second if error is there then do not parse the data
*/
var json={
    //status:"Success",
    status:"Inprogress",
    error:"Status is not a success, so data is not provied", 
    data:
    [   {   name:"Dipak",    spga:6.0    },
        {   name:"kiran",    spga:6.5    },
        {   name:"Sumit",    spga:6.8    },
        {   name:"Ram  ",    spga:7.0    },
        {   name:"Sham ",    spga:7.5    }
    ]
}
if(`${json.status}`=== 'Success'){
   console.log(`
    Data :  Name    &   SGPA  `)             
    for (let i = 0; i < json.data.length; i++) { 
        console.log(`            ${json.data[i].name}   ::  ${json.data[i].spga}`)          
    }  
}
else{
    console.log(` ${json.error}`);
}
