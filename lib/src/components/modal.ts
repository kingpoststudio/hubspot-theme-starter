import '../globals';

const { LitElement, html, css, property, customElement } = window.Lit;

class Modal extends LitElement {
    static styles = css`
        * {
            font-family: Helvetica;
        }

        body {
            margin: 0;
        }

        .container {
            display: flex;
            flex-direction: row;
            gap: var(--space);
        }

        .headline {
            font-size: 1.5rem;
            text-decoration: underline;
            text-decoration-color: lightgray;
        }

        .text-sm {
            font-size: 0.875rem;
        }

        #modal {
            flex: 1;
            display: flex;
            justify-content: center;
            place-items: center;
            height: 100%;
            width: 100%; 
            background-color: rgba(0, 0, 0, 0.5);
            position: absolute;
            top: 0;
            left: 0;
        }

        #instructions {
            flex: 1;
            padding: 1rem;
            border-right: 1px solid lightgray;
            height: calc(100vh - 2rem);
            overflow-y: scroll;
        }

        .modal-container {
            background-color: red;
            width: 30rem;
            border-radius: 3rem;
            text-align: center;
            line-height: 1.75rem;
            padding: 1.5rem 1.5rem;
            justify-content: center;
          }

        .content {
            background-color:
            padding: 1rem; 
        }

        slot[name="title"]::slotted(title) {
            color: black;
        }
    `;


    render() {
        return html`
                <div id="modal">
                    <div class="modal-container">
                        <div class="content">
                            <slot name="title"></slot>
                            <slot name="description"></slot>
                            <slot name="button"></slot>
                        </div>
                    </div>
                </div>
        `;
    }
}

customElements.define('hubspot-modal', Modal);
