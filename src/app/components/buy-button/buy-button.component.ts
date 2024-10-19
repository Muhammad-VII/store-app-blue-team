import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  effect,
  inject,
  Input,
  input,
} from '@angular/core';
import { EventBusService } from '../../services/event-bus.service';

@Component({
  selector: 'app-buy-button',
  standalone: true,
  imports: [],
  templateUrl: './buy-button.component.html',
  styleUrl: './buy-button.component.scss',
})
export class BuyButtonComponent {
  eventBusService = inject(EventBusService);
  @Input() dataFromHost: any;

  buyProduct() {
    this.eventBusService.dispatchEvent(
      'add-product',
      {
        product: this.dataFromHost()
      }
    );
  }
}
