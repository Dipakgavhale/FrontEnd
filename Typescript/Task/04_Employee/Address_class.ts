/*
    Task # 4
    Implement has relationship of address class in Employee Details Class property (house no, area, city, pin)
*/
export class address{
    house_no : string;
    area : string;
    city : string;
    pin : number;
    constructor(house_no : string, area : string, city : string, pin : number){
        this.house_no = house_no ;
        this.area = area ;
        this.city = city ;
        this.pin = pin ; 

    }
    displayAdd():string{
        return(`${this.house_no} ${this.area} ${this.city} ${this.pin} `)
    }
}