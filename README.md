# Design System Angular Elements

This is a demonstration of a Design System using a simulated monorepo architecture and Angular Elements to generate Web Components styled with Angular Material.

## 🌟 Key Features

* **Angular Elements**: Exposing standard Angular components as native Web Components (Custom Elements).
* **Angular Material** (v19+): Leveraging the `@angular/material` library with custom theming.
* **Component Registry**: A centralized registry to transform Angular components to Custom Elements seamlessly.
* **Dark Mode**: Fully supports a light/dark mode switch that adjusts Material palettes globally.
* **Modern Angular**: Built with Angular 21, Signals, and a Zoneless approach.

## 📦 Emulated Monorepo Architecture

* `libs/ds-components`: Simulates a separate library containing UI components.
* `ds-components/registry.ts`: The bridge that registers Angular elements on application bootstrap.

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/design-system-angular-elements.git
   cd design-system-angular-elements
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:3000/`.
