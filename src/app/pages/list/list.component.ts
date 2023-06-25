import { Routes } from '@angular/router';
import { Component,ViewChild } from '@angular/core';
import { playerI } from 'src/app/interfaces/interfaces';
import { PlayersService } from 'src/app/services/players.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @ViewChild("name") inputname:any;
  @ViewChild("position") position:any;
  console=console;
  showRow:boolean=false;
  playersList:playerI[]=[];
  playersFiltered:playerI[]=[];
  positionFiltered:playerI[]=[];

constructor(private player:PlayersService){}

filtrar(filtro:any){
  // this.filteredList=this.avengersList.filter((avenger)=> avenger.name.includes(filtro))
 this.playersFiltered=this.playersList.filter((player)=> player.name.toLowerCase().includes(filtro.target.value.toLowerCase()))
 }

setRow():void{this.showRow=true}
unsetRow():void{this.showRow=false}

 posicion(filtro:any){
    
    this.playersFiltered=[...this.playersList]
    //this.console.log(this.playersFiltered)
    this.positionFiltered=this.playersFiltered.filter((player)=> player.characteristics.position.toLowerCase().includes(filtro.target.value.toLowerCase()));
    this.playersFiltered=this.positionFiltered
 
 }

limpiar():void{
this.inputname.nativeElement.value="";
this.position.nativeElement.value="";
this.playersFiltered=this.playersList;

}


 

ngOnInit():void{
  

  this.player.getAllPlayers().subscribe((data:any)=>{
    this.playersList=data;
    //this.console.log(data)
    this.playersFiltered=[...data];
  })
}
}
