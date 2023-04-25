const { LitElement, html, css, customElement } = window.Lit;

@customElement('hubspot-hero-banner')
export default class HeroBanner extends LitElement {
  static styles = css`
    .wrapper {
      display: flex;
      flex-direction: column;
      max-width: var(--page-max-width);
      margin: 0 auto;
      padding: 2rem;
      gap: 1rem;
      background: var(--color-black);
      color: var(--color-white);
      text-align: center;
      border-radius: 0 0 1rem 1rem;
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
