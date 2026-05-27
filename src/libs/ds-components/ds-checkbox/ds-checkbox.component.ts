import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'ds-checkbox',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  template: `
    <mat-checkbox [checked]="checked()" [color]="color()" [disabled]="disabled()" (change)="onChange($event)">
      {{ label() }}
    </mat-checkbox>
  `,
  styles: [`
    :host { display: inline-block; }
  `]
})
export class DsCheckboxComponent {
  checked = input<boolean>(false);
  color = input<string>('primary');
  label = input<string>('Checkbox');
  disabled = input<boolean>(false);
  
  dsChange = output<boolean>();

  onChange(event: any) {
    this.dsChange.emit(event.checked);
  }
}
