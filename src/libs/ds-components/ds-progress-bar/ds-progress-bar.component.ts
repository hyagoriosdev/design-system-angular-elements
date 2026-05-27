import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'ds-progress-bar',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  template: `
    <mat-progress-bar [mode]="mode()" [value]="value()" [color]="color()"></mat-progress-bar>
  `,
  styles: [`
    :host { display: block; width: 100%; }
  `]
})
export class DsProgressBarComponent {
  mode = input<'determinate' | 'indeterminate' | 'buffer' | 'query'>('determinate');
  value = input<number>(50);
  color = input<string>('primary');
}
