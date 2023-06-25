import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component,Input } from '@angular/core';
import { playerI } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
@Input() player!:playerI
}
