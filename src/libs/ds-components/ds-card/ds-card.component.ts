import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ds-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <mat-card class="ds-card-custom">
      <mat-card-header>
        <mat-card-title>{{ title() }}</mat-card-title>
        @if (subtitle()) {
          <mat-card-subtitle>{{ subtitle() }}</mat-card-subtitle>
        }
      </mat-card-header>
      <mat-card-content class="pt-4">
        <!-- Content projection -->
        <ng-content></ng-content>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    :host {
      display: block;
      margin-bottom: 16px;
    }
    .ds-card-custom {
      border-radius: 16px;
      overflow: hidden;
    }
    .pt-4 {
      padding-top: 1rem;
    }
  `]
})
export class DsCardComponent {
  title = input<string>('Card Title');
  subtitle = input<string>('');
}
