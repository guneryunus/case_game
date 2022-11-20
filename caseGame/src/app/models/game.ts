export class Game {
    id:number;
    game:string;
    bundle:string;
    owner:string;
    img:string;

    initNull():void{
        this.id=0;
        this.game="";
        this.bundle="";
        this.owner="";
        this.img="";
    }
}