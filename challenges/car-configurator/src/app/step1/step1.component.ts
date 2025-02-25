import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfiguratorService } from '../configurator.service';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss',
})
export class Step1Component {
  #configuratorSrv = inject(ConfiguratorService);

  allModels = this.#configuratorSrv.allModels;
  colors = this.#configuratorSrv.colors;
  selectedCar = this.#configuratorSrv.selectedCar
  selectedColor = this.#configuratorSrv.selectedColor
  selectedImage = this.#configuratorSrv.selectedImage

  handleSelectCar = this.#configuratorSrv.selectCar
  handleSelectColor = this.#configuratorSrv.selectColor
}
