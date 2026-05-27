import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ds-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <mat-icon [color]="color()">{{ icon() }}</mat-icon>
  `,
  styles: [`
    :host { display: inline-flex; vertical-align: middle; }
  `]
})
export class DsIconComponent {
  icon = input<string>('star');
  color = input<string>('primary');
}
