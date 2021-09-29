/*
    Task # 4
    Implement has relationship of address class in Employee Details Class property (house no, area, city, pin)
*/
export class address{
    private house_no : string;
    private area : string;
    private city : string;
    private pin : number;
    constructor(house_no : string, area : string, city : string, pin : number){
        this.house_no = house_no ;
        this.area = area ;
        this.city = city ;
        this.pin = pin ; 
    }
    getHouse_no():string{
        return (this.house_no);
    }
    setHouse_no(house_no:string){
        this.house_no = house_no;
    }

    getArea():string{
        return (this.area);
    }
    setArea(area:string){
        this.area = area;
    }

    getCity():string{
        return (this.city);
    }
    setCity(city:string){
        this.city = city;
    }

    getPin():number{
        return (this.pin);
    }
    setPin(pin:number){
        this.pin = pin;
    }
}