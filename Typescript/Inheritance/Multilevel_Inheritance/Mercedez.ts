import { Car } from "./Car";
export class Mercedez extends Car{
    constructor(){
        super();
    }
    Fratures(){
        return super.Fratures()+("2. But Mercedez is Special car.")
    }
}