import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { addGame } from 'src/app/stateManagement/actions/game.action';
import { NotificationService } from 'src/app/services/notification.service'
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-creation',
  templateUrl: './game-creation.component.html',
  styleUrls: ['./game-creation.component.scss']
})
  export class GameCreationComponent implements OnInit {

    constructor(private store: Store<Game>,private notifyService : NotificationService) { }
    id:number=1;
    game: Observable<string>;
    newGame:Game= new Game();
    formSubmitted = false;
    registrationFormGroup = new FormGroup({
      name: new  FormControl('', [Validators.required]),
       email: new FormControl('', [Validators.required, Validators.email]),
      bundle: new FormControl('', [Validators.required, Validators.pattern( '((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15})')]),
      image: new FormControl('', [Validators.required])
    });
  

    ngOnInit(): void {
      this.newGame.initNull();
      this.game = this.store.select("game");
    }
   
    onSubmit():void { 
      this.formSubmitted=true;
      if (this.registrationFormGroup.valid){
        const g: Game = new Game();
        this.newGame.id=this.id
        g.initParameters(this.newGame)
        this.store.dispatch(addGame(g));
        this.showToasterSuccess()
        this.id=this.newGame.id+1;
        this.newGame.initNull();
        return;
      }
    }
     
    readUrl(event:any){
      if(event.target.files && event.target.files[0]){
        var reader = new FileReader();
        reader.onload = (event:ProgressEvent)=>{
          this.newGame.img = (<FileReader>event.target).result;
        } 
        reader.readAsDataURL(event.target.files[0])
      }
    }

    showToasterSuccess(){
      this.notifyService.showSuccess( "Succecces")
   }
  }