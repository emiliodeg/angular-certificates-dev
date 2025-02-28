import { Component, inject } from '@angular/core';
import { ConfiguratorService } from '../configurator.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Config } from '../models.type';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss',
})
export class Step2Component {
  #service = inject(ConfiguratorService);

  options = this.#service.options;
  tow = this.#service.tow;
  yoke = this.#service.yoke;
  selectedConfig = this.#service.selectedConfig;

  handleSelectConfig(config: Config) {
    this.#service.selectConfig(config);
  }
}
