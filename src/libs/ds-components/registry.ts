import { createCustomElement } from '@angular/elements';
import { Injector } from '@angular/core';

import { DsBadgeComponent } from './ds-badge/ds-badge.component';
import { DsButtonComponent } from './ds-button/ds-button.component';
import { DsCardComponent } from './ds-card/ds-card.component';
import { DsCheckboxComponent } from './ds-checkbox/ds-checkbox.component';
import { DsChipsComponent } from './ds-chips/ds-chips.component';
import { DsDividerComponent } from './ds-divider/ds-divider.component';
import { DsIconComponent } from './ds-icon/ds-icon.component';
import { DsProgressBarComponent } from './ds-progress-bar/ds-progress-bar.component';
import { DsProgressSpinnerComponent } from './ds-progress-spinner/ds-progress-spinner.component';
import { DsRadioComponent } from './ds-radio/ds-radio.component';
import { DsSlideToggleComponent } from './ds-slide-toggle/ds-slide-toggle.component';
import { DsSliderComponent } from './ds-slider/ds-slider.component';

export function registerDesignSystemElements(injector: Injector) {
  if (typeof customElements === 'undefined') return;

  const elements = [
    { name: 'ds-badge', component: DsBadgeComponent },
    { name: 'ds-button', component: DsButtonComponent },
    { name: 'ds-card', component: DsCardComponent },
    { name: 'ds-checkbox', component: DsCheckboxComponent },
    { name: 'ds-chips', component: DsChipsComponent },
    { name: 'ds-divider', component: DsDividerComponent },
    { name: 'ds-icon', component: DsIconComponent },
    { name: 'ds-progress-bar', component: DsProgressBarComponent },
    { name: 'ds-progress-spinner', component: DsProgressSpinnerComponent },
    { name: 'ds-radio', component: DsRadioComponent },
    { name: 'ds-slide-toggle', component: DsSlideToggleComponent },
    { name: 'ds-slider', component: DsSliderComponent }
  ];

  for (const { name, component } of elements) {
    if (!customElements.get(name)) {
      const el = createCustomElement(component, { injector });
      customElements.define(name, el);
    }
  }
}
