import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardValue } from '../../../model/deck';

@Component({
    selector: 'shpp-pickable-card',
    templateUrl: './pickable-card.component.html',
    styleUrls: ['./pickable-card.component.scss'],
    standalone: true,
    imports: [NgbModule]
})
export class PickableCardComponent {
  @Input() cardValue?: CardValue;
  @Input() selected = false;
  @Input() disabled = false;

}
