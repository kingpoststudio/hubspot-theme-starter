import '../globals';

const { LitElement, html, css, property } = window.Lit;

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
      background-color: var(--color-white);
      width: 30rem;
      border-radius: 3rem;
      border: .25rem solid black;
      text-align: center;
      line-height: 2rem;
      padding: 1.5rem 1.5rem;
      justify-items: center;
    }

    .button-container {
      text-align: center;
    }

    .button-container button {
      display: inline-block;
      margin-right: .5rem;
    }
  `;

  @property({ type: Boolean }) isModalOpen = false;

  @property({ type: Boolean }) formInteracted = false;

  constructor() {
    super();
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    if (!this.formInteracted) this.isModalOpen = false;
  }

  handleKeyDown(event) {
    if (event.key === 'Escape') this.closeModal();
  }

  submitForm(event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const subscription = formData.get('subscription');
    const agreement = formData.get('agreement');
    const gender = formData.get('gender');

    if (!this.formInteracted) {
      this.closeModal();
    }
  }

  checkValidity(event) {
    this.formInteracted = true;
  }

  get renderForm() {
    return html`
    <form @submit=${this.submitForm} @change=${this.checkValidity}>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <br>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <br>

      <label for="subscription">Subscription Type:</label>
      <select id="subscription" name="subscription" required>
        <option value="">Select...</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <br>

      <label for="agreement">I agree to the terms and conditions:</label>
      <input type="checkbox" id="agreement" name="agreement" required><br>

      <label>Gender</label>

      <input type="radio" id="male" name="gender" value="male" required>
      <label for="male">Male</label>

      <input type="radio" id="female" name="gender" value="female" required>
      <label for="female">Female</label>
      <br>

      <div class="button-container">
        <button type="submit" slot="submit-btn">Submit</button>
        <button @click="${() => this.isModalOpen = false}">Cancel</button>
      </div>
    </form>
    `;
  }

  render() {
    return html`
    <button @click="${this.openModal}">Open</button>
    <div id="modal" style="display: ${this.isModalOpen ? 'flex' : 'none'}"> 
      <div class="modal-container">
        <div class="content">
          <slot name="title"></slot>
          <slot name="description"></slot>
          ${this.renderForm}
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('hubspot-modal', Modal);





