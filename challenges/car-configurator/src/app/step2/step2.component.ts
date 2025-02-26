import { Component, inject } from '@angular/core';
import { ConfiguratorService } from '../configurator.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss',
})
export class Step2Component {
  #service = inject(ConfiguratorService);

  options = this.#service.options
  selectConfig = this.#service.selectConfig
  selectedConfig = this.#service.selectedConfig
}
