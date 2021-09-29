import { Mercedez } from "./Mercedez";
export class Luxury extends Mercedez{
    constructor(){
        super();
    }
    Fratures(){
        return super.Fratures()+("3. and Luxury has Artificial Intelligence.")
    }
}