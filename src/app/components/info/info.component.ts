import { Component } from '@angular/core';
import { Info } from '../../interfaces/info';
import { INFOS } from '../../mocks/mock-info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  cardData: Info[] = INFOS;
}
