import { Component, Input } from '@angular/core';
import { playerI } from 'src/app/interfaces/interfaces';
import { PlayersService } from 'src/app/services/players.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() player!:playerI;
  @Input() showRow!:boolean;
  console=console
  id!: number;
  avenger!: any;
  constructor(
    private playerserv: PlayersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   this.id = Number(params.get('id'));
    // });
    // this.servicio.getAvenger(this.id).subscribe((data: any) => {
    //   this.avenger = data;
    // });
  }
 
}
