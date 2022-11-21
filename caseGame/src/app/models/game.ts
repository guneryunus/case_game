export class Game {
    id:number;
    game:string;
    bundle:string;
    owner:string;
    img:any;

    initNull():void{
        this.id=0;
        this.game="";
        this.bundle="";
        this.owner="";
        this.img="";
    }

    initParameters(params:Game){
        this.id=params.id;
        this.game=params.game;
        this.bundle=params.bundle;
        this.owner=params.owner;
        this.img=params.img;
    }
}