import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'ds-divider',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  template: `
    <mat-divider [inset]="inset()"></mat-divider>
  `,
  styles: [`
    :host { display: block; margin: 16px 0; }
  `]
})
export class DsDividerComponent {
  inset = input<boolean>(false);
}
