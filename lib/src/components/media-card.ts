import '../globals';

const { LitElement, html, css } = window.Lit;

class MediaCard extends LitElement {
    static styles = css`
        
        .wrapper {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 6.25rem;
        }

        .container {
            background: white;
            width: 19.18rem;
            height: 24rem;
            margin: 1rem;
            border: 0.25rem solid black;
            border-radius: 1rem;
        }

        .container-image {
            height: 12rem;
            margin-bottom: 1rem;
            background-size: cover;
            border-radius: 0.75rem 0.75rem 0 0;
        }

        .container-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 0rem 0.5rem;
        }

        ::slotted([slot="title"]) {
            text-transform: uppercase;
        }

        ::slotted([slot="description"]) {
            font-size: 14px;
            line-height: 1;
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
            margin-top: 0.5rem;
        }

        
    `;

    render() {
        return html`
        
        <div class="wrapper">
            <div class="container">
                <div class="container-image" style="background-image: url('https://picsum.photos/300/200');"> 
            </div>
            <div class="container-content">
                <slot name="title"></slot>
                <slot name="description"></slot>
                <slot name="button"></slot>
            </div>
        </div>
        `;
    }
}

customElements.define('hubspot-media-card', MediaCard);