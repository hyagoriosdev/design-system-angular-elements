import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ds-slider',
  standalone: true,
  imports: [CommonModule, MatSliderModule],
  template: `
    <mat-slider [min]="min()" [max]="max()" [step]="step()" [color]="color()" [disabled]="disabled()">
      <input matSliderThumb [value]="value()" (valueChange)="onChange($event)">
    </mat-slider>
  `,
  styles: [`
    :host { display: block; margin: 8px 0; }
  `]
})
export class DsSliderComponent {
  min = input<number>(0);
  max = input<number>(100);
  step = input<number>(1);
  value = input<number>(50);
  color = input<ThemePalette>('primary');
  disabled = input<boolean>(false);
  
  dsChange = output<number>();

  onChange(val: number) {
    this.dsChange.emit(val);
  }
}
