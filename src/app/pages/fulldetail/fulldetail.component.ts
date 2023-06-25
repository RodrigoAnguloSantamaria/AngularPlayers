import { PlayersService } from 'src/app/services/players.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { playerI } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fulldetail',
  templateUrl: './fulldetail.component.html',
  styleUrls: ['./fulldetail.component.scss']
})
export class FulldetailComponent {
  id!:number;
  myplayer!:playerI;
constructor(
  private player:PlayersService,
  private activatedRoute: ActivatedRoute,
  private router: Router
  ){}
  
  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.player.getPlayerById(this.id).subscribe((data: any) => {
      this.myplayer = data;
      console.log(this.myplayer)
    });
    
  }
  deletePlayer(){
    this.player.deletePlayer(this.id).subscribe((data:any)=>{
      // alert("Jugador eliminado")
      Swal.fire({
        title: "Mi aplicacion",
        text: "Jugador eliminado correctamente",
        width: "50%",
        background:"#fcdcb4",
        position:"center",
        color:"#000000"
    
    
      });
      this.router.navigate(["list"])
    })
  }
  modifyPlayer(myplayer:any){
    this.player.modifyItem(myplayer);
    this.router.navigate(["edit"])
  }
}
