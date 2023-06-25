
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, FormArray } from '@angular/forms'; 
import { Router } from '@angular/router';
import { playerI } from 'src/app/interfaces/interfaces';
import { PlayersService } from 'src/app/services/players.service';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {
  playerForm!:FormGroup;
  allTeams!:string[];
  newPlayer!:playerI;
  playerId?:number;
  submitted:boolean=false;
  alerta:string="";
 
  constructor(private formBuilder: FormBuilder,
    private player: PlayersService,
    private router: Router,
    
   
    ){
      this.newPlayer = this.player.playerData;
      this.playerId = this.player.playerData.id;
    }

     

ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      name: [this.newPlayer.name, [Validators.required, Validators.minLength(4)]],
      image: [this.newPlayer.image],
      position: [this.newPlayer.characteristics.position, [Validators.required]],
      MVPs: [this.newPlayer.characteristics.MVPs, [ Validators.maxLength(2)]],
      championships: [this.newPlayer.characteristics.championships, [ Validators.maxLength(2)]],
      team: [this.newPlayer.characteristics.team, [Validators.required, Validators.minLength(4)]]

    });

    this.playerForm.valueChanges.subscribe((changes) => {
    
      this.newPlayer = {

          name:changes.name,
          image:changes.image,
          characteristics:{
            position:changes.position,
            MVPs:changes.MVPs,
            championships:changes.championships,
            team:changes.team
        }
      };
      
    });

    this.player.getAllTeams().subscribe((data:any)=>{

      this.allTeams=data;
     
     })
  }
  
  submitForm() {
    this.submitted=true;
    if(this.playerForm.valid){

    
      if (this.playerId !== 0) {
        this.player.putAvenger(this.playerId, this.newPlayer).subscribe();
        // alert('Jugador modificado');
        Swal.fire({
          title: "Mi aplicacion",
          text: "Jugador modificado correctamente",
          width: "50%",
          background:"#fcdcb4",
          position:"center",
          color:"#000000"
      
      
        });
        
        this.router.navigate(['list']);
      } else {
        this.player.postPlayer(this.newPlayer).subscribe();
        // alert('Jugador creado');
        Swal.fire({
          title: "Mi aplicacion",
          text: "Jugador creado correctamente",
          width: "50%",
          background:"#fcdcb4",
          position:"center",
          color:"#000000"
      
      
        });
        this.router.navigate(['list']);
      }
    }
    console.log(this.player.playerData)
    this.playerForm.reset();
  }
  }


