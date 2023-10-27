import '../globals';

const { LitElement, html, css } = window.Lit;

class MediaCard extends LitElement {
    static styles = css`
        .wrapper {
            width: 10rem;
            background: purple;
            color: black;
            border: 0.25rem solid green;
        }
    `;

    render() {
        console.log(this.children);
        return html`
        <div class="wrapper">
            <slot name="image"></slot>
            <slot name="title"></slot>
            <slot name="button"></slot>
        </div>
        `;
    }
}

customElements.define('hubspot-media-card', MediaCard);