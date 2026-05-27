import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ds-badge',
  standalone: true,
  imports: [CommonModule, MatBadgeModule, MatIconModule],
  template: `
    <div [matBadge]="value()" [matBadgeColor]="color()" [matBadgeHidden]="hidden()">
      <mat-icon>{{ icon() }}</mat-icon>
    </div>
  `,
  styles: [`
    :host { display: inline-block; padding: 4px; }
  `]
})
export class DsBadgeComponent {
  value = input<string>('0');
  color = input<ThemePalette>('accent');
  hidden = input<boolean>(false);
  icon = input<string>('notifications');
}
