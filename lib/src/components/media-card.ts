import '../globals';

const { LitElement, html, css } = window.Lit;

class MediaCard extends LitElement {
    static styles = css`
        * {
            box-sizing: border-box;
        }

        .wrapper {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .container {
            background: white;
            width: 20rem;
            min-height: 24rem;
            margin: var(--space);
            border: 0.25rem solid black;
            border-radius: 1rem;
            overflow: hidden;
        }

        .container-image {
            display: flex;
            width: 100%;
            aspect-ratio: 16 / 9;
            border-radius: 0.75rem 0.75rem 0 0;
        }
    
        slot[name="image"]::slotted(img) {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .container-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: var(--space);
            padding: var(--space);
        }

        ::slotted([slot="title"]) {
            text-transform: uppercase;
        }

        ::slotted([slot="description"]) {
            font-size: 0.825rem;
            line-height: 1.25;
            color: black;
            text-align: center;
        }

        ::slotted([slot="button"]) {
            background-color: black;
            color: white;
            padding: 0.625rem 1.25rem;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
        }
    `;

    render() {
        return html`
        <div class="wrapper">
                <div class="container">
                <div class="container-image">
                    <slot name="image"></slot>
                </div>
                <div class="container-content">
                    <slot name="title"></slot>
                    <slot name="description"></slot>
                    <slot name="button"></slot>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('hubspot-media-card', MediaCard);
