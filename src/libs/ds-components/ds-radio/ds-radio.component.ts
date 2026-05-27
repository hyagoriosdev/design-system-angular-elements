import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ds-radio',
  standalone: true,
  imports: [CommonModule, MatRadioModule],
  template: `
    <mat-radio-group [value]="value()" [color]="color()" [disabled]="disabled()" (change)="onChange($event)">
      @for (option of parsedOptions(); track option) {
        <mat-radio-button [value]="option">{{ option }}</mat-radio-button>
      }
    </mat-radio-group>
  `,
  styles: [`
    :host { display: block; }
    mat-radio-group { display: flex; flex-direction: column; gap: 8px; }
  `]
})
export class DsRadioComponent {
  options = input<string>('Option 1,Option 2,Option 3'); // Comma-separated
  value = input<string>('Option 1');
  color = input<ThemePalette>('primary');
  disabled = input<boolean>(false);
  
  dsChange = output<string>();

  parsedOptions() {
    return this.options().split(',').map(s => s.trim());
  }

  onChange(event: any) {
    this.dsChange.emit(event.value);
  }
}
