import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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

    .wrapper.dark {
      background: #000;
      color: #fff;
    }

    .wrapper > slot[name="title"] {
      text-transform: uppercase;
    }
  `;

  @property({ type: String }) theme: 'light' | 'dark' = 'light';

  render() {
    return html`
      <div class="wrapper ${this.theme}">
        <slot name="title"></slot>
        <slot name="content"></slot>
        <slot name="cta"></slot>
      </div>
    `;
  }
}
