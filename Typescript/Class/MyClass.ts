/*
Access specifer
1 public (bydefault): anyware.class,variable, method,constructor
2 private: same class. 
3 protected : same class & subclass of ather packege.
*/

//packege (folder) its a set of class and interface
/*
1 Calss call in same packege
    first export class. write export keyword onthat class then 
    import{className/ FunctionName/ ConstVeriable} from './demo1';      //.(currunt)/(directry) 
2 Class call in diffrents packege
    first export class. write export keyword onthat class then 
    import{className/ FunctionName/ ConstVeriable} from '../ClassPackege/currentPackege';      
*/
export class Myclass{
   // class property 
   fname:string;
   lname:string;
   id:number;
/*
constructor 
calss name as a constructor is not compasary,constructor is a keyword, can not overroad 
default constructor add by default by compailer if you not add constructor.
every constructor 1st line is supper(). can not constructor is pravite.
*/
constructor(myfname:string,lname:string,id:number){
this.fname = myfname;
this.lname = lname;
this.id = id; 
}
//method
   display(){
    console.log(`
       Id         :: ${this.id}
       First Name :: ${this.fname}
       Last Name  :: ${this.lname}
    `)
   }
}
// object creation in same file
var obj = new Myclass('Dipak','Gavhale',1);
obj.display();