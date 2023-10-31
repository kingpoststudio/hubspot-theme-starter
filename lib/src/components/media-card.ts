import '../globals';

const { LitElement, html, css, property, customElement } = window.Lit;

class MediaCard extends LitElement {
    static styles = css`
        * {
            box-sizing: border-box;
        }

        .wrapper {
            background: var(--color-white);
            width: 20rem;
            min-height: 24rem;
            margin: var(--space);
            border: 0.25rem solid var(--color-black);
            border-radius: 1rem;
            overflow: hidden;
        }

        .wrapper.dark {
            background: var(--color-black);
            color: var(--color-white);
        }

        .wrapper.purple {
            background: var(--color-purple);
            color: var(--color-lime);
            border: 0.25rem solid var(--color-lime);
        }

        .image {
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

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: var(--space);
            padding: var(--space);
        }

        slot[name="title"]::slotted(title) {
            text-transform: uppercase;
        }

        slot[name="description"]::slotted(description) {
            font-size: 0.825rem;
            line-height: 1.25;
            color: var(--color-black);
            text-align: center;
        }

        slot[name="button"]::slotted(button) {
            background-color: var(--color-black);
            color: var(--color-white);
            padding: 0.625rem 1.25rem;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
        }

        .wrapper.dark slot[name="button"]::slotted(button) {
            background-color: var(--color-white);
            color: var(--color-black);
        }

        .wrapper.purple slot[name="button"]::slotted(button) {
            background-color: var(--color-lime);
            color: var(--color-purple);
        }
    `;
    
    @property({ type: String }) theme = 'light';

    render() {
        return html`
        <div class="wrapper ${this.theme}">
            <div class="image">
                <slot name="image"></slot>
            </div>
            <div class="content">
                <slot name="title"></slot>
                <slot name="description"></slot>
                <slot name="button"></slot>
            </div>
        </div>
        `;
    }
}

customElements.define('hubspot-media-card', MediaCard);
