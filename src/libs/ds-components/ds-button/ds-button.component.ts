import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <button 
      mat-flat-button 
      [color]="color()" 
      [disabled]="disabled()" 
      (click)="onClick($event)">
      {{ label() }}
    </button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class DsButtonComponent {
  label = input<string>('Button');
  color = input<string>('primary');
  disabled = input<boolean>(false);
  
  dsClick = output<Event>();

  onClick(event: Event) {
    if (!this.disabled()) {
      this.dsClick.emit(event);
    }
  }
}
