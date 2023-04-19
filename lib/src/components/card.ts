import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('hubspot-card')
export default class Card extends LitElement {
  static styles = css`
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      max-width: 20rem;
      margin: 0 auto;
      padding: 2rem;
      background: #fff;
      border-radius: 1rem;
      box-shadow: var(--box-shadow);
    }

    .wrapper > * {
    }
  `;

  render() {
    return html`
      <div class="wrapper">
        <slot name="title"></slot>
        <slot name="content"></slot>
        <slot name="cta"></slot>
      </div>
    `;
  }
}
