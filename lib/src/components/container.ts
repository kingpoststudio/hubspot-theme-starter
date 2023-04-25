import { customElement } from 'lit/decorators.js';
const { LitElement, html, css } = window.Lit;

@customElement('hubspot-container')
export default class Container extends LitElement {
  static styles = css`
    :host {
      display: block;
      max-width: var(--page-max-width);
      margin: 0 auto;
      padding: 2rem;
    }
  `;

  render() {
    return html`
      <slot></slot>
    `;
  }
}
