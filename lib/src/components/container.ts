const { LitElement, html, css, customElement } = window.Lit;


@customElement('hubspot-container')
export default class Container extends LitElement {
  static styles = css`
    :host {
      display: block;
      max-width: 1200px;
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
