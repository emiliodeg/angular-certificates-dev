import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfiguratorService } from '../configurator.service';
import { CarModel, Color } from '../models.type';

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
  selectedCar = this.#configuratorSrv.selectedCar;
  selectedColor = this.#configuratorSrv.selectedColor;
  selectedImage = this.#configuratorSrv.selectedImage;

  handleSelectCar(car: CarModel) {
    this.#configuratorSrv.selectCar(car);
  }

  handleSelectColor(color: Color) {
    this.#configuratorSrv.selectColor(color);
  }
}
