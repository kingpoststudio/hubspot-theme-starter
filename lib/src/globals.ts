import { LitElement, html, css } from 'lit';

declare global {
  interface Window {
    Lit: {
      LitElement: typeof LitElement;
      html: typeof html;
      css: typeof css;
    };
  }
}

window.Lit = { LitElement, html, css };
