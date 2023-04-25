const { LitElement, html, css, customElement } = window.Lit;

@customElement('hubspot-grid')
export default class Grid extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
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
