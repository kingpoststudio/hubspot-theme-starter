import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

declare global {
  interface Window {
    Lit: {
      LitElement: typeof LitElement;
      html: typeof html;
      css: typeof css;
      customElement: typeof customElement;
      property: typeof property;
    };
  }
}

window.Lit = { LitElement, html, css, customElement, property };
