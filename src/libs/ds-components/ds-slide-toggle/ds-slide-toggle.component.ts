import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'ds-slide-toggle',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  template: `
    <mat-slide-toggle [checked]="checked()" [color]="color()" [disabled]="disabled()" (change)="onChange($event)">
      {{ label() }}
    </mat-slide-toggle>
  `,
  styles: [`
    :host { display: inline-block; }
  `]
})
export class DsSlideToggleComponent {
  checked = input<boolean>(false);
  color = input<string>('accent');
  label = input<string>('Toggle');
  disabled = input<boolean>(false);
  
  dsChange = output<boolean>();

  onChange(event: any) {
    this.dsChange.emit(event.checked);
  }
}
