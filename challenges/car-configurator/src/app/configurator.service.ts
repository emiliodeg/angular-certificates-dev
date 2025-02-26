import { computed, effect, inject, Injectable, signal, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { CarModel, CarOptions, Color, Config } from './models.type';

@Injectable({
  providedIn: 'root',
})
export class ConfiguratorService {
  private http = inject(HttpClient);

  readonly allModels: Signal<CarModel[]> = toSignal(
    this.http.get<CarModel[]>('models'),
    { initialValue: [] },
  );

  readonly fetchOptions = (id: string) => this.http.get<CarOptions>(`/models/${id}`);

  readonly selectedCar = signal<CarModel | undefined>(undefined);
  readonly selectedColor = signal<Color | undefined>(undefined);
  readonly selectedConfig = signal<Config | undefined>(undefined);
  readonly tow = signal<boolean>(false);
  readonly yoke = signal<boolean>(false);
  
  readonly colors = computed(() => this.selectedCar()?.colors ?? []);
  readonly options = signal<CarOptions | undefined>(undefined);

  readonly selectedImage = computed(() => {
    const car = this.selectedCar();
    const color = this.selectedColor();
  
    if (!car || !color) return undefined;

    return `https://interstate21.com/tesla-app/images/${car.code}/${color.code}.jpg`;
  });

  constructor() {
    effect(() => {
      if (this.selectedCar()?.code)
        this.http.get<CarOptions>("options/" + this.selectedCar()?.code)
          .subscribe(options => this.options.set(options))
    });
  }

  selectCar(car: CarModel) {
    this.selectedCar.set(car);
    this.selectedColor.set(undefined);
  }
  
  selectColor(color: Color) {
    this.selectedColor.set(color);
  }
  
  selectConfig(config: Config) {
    this.selectedConfig.set(config);
  }
}
