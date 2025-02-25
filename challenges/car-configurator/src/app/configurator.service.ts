import { computed, inject, Injectable, signal, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { CarModel, Color } from './models.type';

@Injectable({
  providedIn: 'root',
})
export class ConfiguratorService {
  private http = inject(HttpClient);

  readonly allModels: Signal<CarModel[]> = toSignal(
    this.http.get<CarModel[]>('models'),
    { initialValue: [] },
  );

  readonly selectedCar = signal<CarModel | undefined>(undefined);
  readonly selectedColor = signal<Color | undefined>(undefined);

  readonly colors = computed(() => this.selectedCar()?.colors ?? []);

  readonly selectedImage = computed(() => {
    const car = this.selectedCar();
    const color = this.selectedColor();
  
    if (!car || !color) return undefined;

    return `https://interstate21.com/tesla-app/images/${car.code}/${color.code}.jpg`;
  });

  selectCar(car: CarModel) {
    this.selectedCar.set(car);
    this.selectedColor.set(undefined);
  }
  
  selectColor(color: Color) {
    console.log({color});
    this.selectedColor.set(color);
  }
}
