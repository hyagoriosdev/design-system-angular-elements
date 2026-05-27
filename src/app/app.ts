import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans p-8 transition-colors duration-300">
      <div class="max-w-4xl mx-auto space-y-8">
        
        <header class="pb-6 border-b border-zinc-200 dark:border-zinc-800 flex items-start justify-between">
          <div>
            <h1 class="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Design System</h1>
            <p class="mt-2 text-zinc-600 dark:text-zinc-400">
              A simulated monorepo architecture exposing Web Components using
              <code class="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded text-sm text-indigo-700 dark:text-indigo-400">@angular/elements</code>.
            </p>
          </div>
          <button 
            (click)="toggleDarkMode()" 
            class="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            title="Toggle Dark Mode">
            @if (isDarkMode()) {
              <ds-icon icon="light_mode" color="accent"></ds-icon>
            } @else {
              <ds-icon icon="dark_mode" color="primary"></ds-icon>
            }
          </button>
        </header>

        <section class="space-y-6 pb-24">
          <h2 class="text-2xl font-semibold tracking-tight">Components Showcase</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Buttons & Basic Interactions -->
            <ds-card title="Buttons & Toggles" subtitle="Action elements">
              <div class="flex flex-wrap gap-4 mb-6">
                <ds-button label="Primary" color="primary" (dsClick)="onElementClick('Primary Button Clicked')"></ds-button>
                <ds-button label="Accent" color="accent" (dsClick)="onElementClick('Accent Button Clicked')"></ds-button>
                <ds-button label="Warn" color="warn" (dsClick)="onElementClick('Warn Button Clicked')"></ds-button>
                <ds-button label="Disabled" disabled="true"></ds-button>
              </div>
              <ds-divider></ds-divider>
              <div class="flex flex-col gap-4 mt-6">
                <ds-slide-toggle label="WiFi Data" color="primary" checked="true" (dsChange)="onElementClick($event ? 'WiFi On' : 'WiFi Off')"></ds-slide-toggle>
                <ds-checkbox label="Accept Terms & Conditions" color="accent" (dsChange)="onElementClick('Terms toggled: ' + $event)"></ds-checkbox>
              </div>
            </ds-card>

            <!-- Data Entry -->
            <ds-card title="Data Entry" subtitle="Selection controls">
              <div class="mb-4 text-zinc-600 dark:text-zinc-400 font-medium text-sm">Select Option:</div>
              <ds-radio options="Apple,Banana,Orange" value="Banana" color="primary" (dsChange)="onElementClick('Radio changed to: ' + $event)"></ds-radio>
              <ds-divider></ds-divider>
              <div class="mt-6 mb-2 text-zinc-600 dark:text-zinc-400 font-medium text-sm">Volume Level:</div>
              <ds-slider min="0" max="100" value="70" color="accent" (dsChange)="onElementClick('Volume changed to: ' + $event)"></ds-slider>
            </ds-card>

            <!-- Indicators & Badges -->
            <ds-card title="Indicators" subtitle="Progress and Status">
              <div class="flex items-center gap-6 mb-8">
                <ds-badge value="4" color="warn" icon="mail"></ds-badge>
                <ds-badge value="12" color="primary" icon="chat"></ds-badge>
                <ds-badge value="!" color="accent" icon="warning"></ds-badge>
                <ds-icon icon="favorite" color="warn"></ds-icon>
                <ds-icon icon="thumb_up" color="primary"></ds-icon>
              </div>
              <ds-divider></ds-divider>
              <div class="mt-6 text-zinc-600 dark:text-zinc-400 font-medium text-sm mb-4">Storage Usage (75%)</div>
              <ds-progress-bar value="75" color="primary"></ds-progress-bar>
              <div class="mt-6 flex items-center gap-4">
                <span class="text-zinc-600 dark:text-zinc-400 font-medium text-sm">Loading data:</span>
                <ds-progress-spinner diameter="32"></ds-progress-spinner>
              </div>
            </ds-card>

            <!-- Content Display -->
            <ds-card title="Data Display" subtitle="Selection & Information">
              <div class="mb-4 text-zinc-600 dark:text-zinc-400 font-medium text-sm">Categories:</div>
              <ds-chips items="Angular,Web Components,Design System,Material" color="accent"></ds-chips>
            </ds-card>
          </div>
        </section>

        <!-- Status Log -->
        @if (lastEvent()) {
          <div class="fixed bottom-8 right-8 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3 rounded-lg shadow-xl animate-in slide-in-from-bottom-8 transition-colors">
            <span class="font-mono text-sm">{{ lastEvent() }}</span>
          </div>
        }
      </div>
    </div>
  `
})
export class App {
  lastEvent = signal<string | null>(null);
  isDarkMode = signal<boolean>(false);

  toggleDarkMode() {
    this.isDarkMode.update(v => !v);
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  onElementClick(message: string) {
    this.lastEvent.set(message);
    setTimeout(() => this.lastEvent.set(null), 3000);
  }
}
