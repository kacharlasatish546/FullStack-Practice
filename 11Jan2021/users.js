var users=[
    {
       name:"ravi",
       address:"hyderabad"  
    },
     {
       name:"kiran",
       address:"hyderabad"  
    },
     {
       name:"rajesh",
       address:"hyderabad"  
    },
     {
       name:"Anil",
       address:"hyderabad"  
    },
     {
       name:"Ajith",
       address:"hyderabad"  
    }
]

function UserDetails(name, address){
this.uname = name;
this.uaddress = address;
}


var uObjct = [];

for(i=0; i<users.length;i++){
    var u1 = new UserDetails(users[i].name, users[i].address);
    uObjct.push(u1);
}

console.log(uObjct);