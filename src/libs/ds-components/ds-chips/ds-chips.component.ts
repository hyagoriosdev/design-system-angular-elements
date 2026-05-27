import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'ds-chips',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  template: `
    <mat-chip-listbox>
      @for (chip of parsedChips(); track chip) {
        <mat-chip [color]="color()" [highlighted]="highlighted()">
          {{ chip }}
        </mat-chip>
      }
    </mat-chip-listbox>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class DsChipsComponent {
  items = input<string>('Item 1,Item 2'); // Comma-separated
  color = input<string>('primary');
  highlighted = input<boolean>(true);

  parsedChips() {
    return this.items().split(',').map(s => s.trim());
  }
}
