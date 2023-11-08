import { html } from 'lit';
import '../components/modal.js';
import '../styles/styles.css';


export default {
    title: 'Modal',
    component: 'hubspot-modal',
};

export const Default = (args) => {
  return html`
   <div class="container">
    <section id="instructions">
    <h1 class="headline">King Post Studio Coding Assessment</h1>
    <h3>Project Description</h3>
    <p>Please create a modal from scratch. This modal must be stateful and modular, so be sure to focus on good separation of concerns and legibility of code.</p>
    <p>The modal should be as described below:
      <ul>
        <li>It can be toggled from hidden to visible with a trigger. The trigger can either dispatch an event globally to open/close the modal, OR it can be a part of the modal component.</li>
        <li>The modal must consist of three sections: a header that accepts a title, a body for a form, and a footer for actions.</li>
        <li>For the title, you must use a slot to pass in the text. See the link for more information: <a href="https://lit.dev/docs/components/shadow-dom/">Working with the Shadow DOM</a></li>
        <li>It should rest on top of the main content body, with a screen or opaque overlay resting between it and the content body.</li>
        <li>It should animate gracefully from hidden to visible, and then visible to hidden. There should be no immediate transitions that occur.</li>
        <li>It should close when pressing the escape key or clicking outside of the modal, ONLY if the user has not yet interacted with the form.</li>
        <li>It should have a form in the body, with the following inputs: text, select, checkbox, radio</li>
        <li>It should have a submit and cancel button in the footer.
          <ul>
            <li>Cancel should close the modal.</li>
            <li>Submit should close the modal, AND take the form's input values and display them within the main content.</li>
            <li>The submission action must simulate a 2-second asynchronous call, with a visual indication of a loading state such as a spinner. Consider using a sleep function to simulate the load.</li>
            <li>The modal cannot close until the loading state finishes.</li>
          </ul>
        </li>
      </ul>
      The form's purpose/inputs/etc. are up to you, and how the content body displays those inputs is your decision as well. Bonus points for a well-constructed and well-styled modal.
    </p>

    <h3>Requirements</h3>
    <ul>
      <li>Use the Lit library to create modular web components. No other libraries or tools can be used.</li>
      <li>Use only JS, HTML and CSS inside of this Codepen.</li>
    </ul>
    Good luck!
  </section>

  <!-- Modal -->
    <hubspot-modal>
    <h1 slot="title">Subscribe to Our Newsletter</h1>
    <p slot="description"> Stay up to date with our latest news 
        and updates by subscribing to our newsletter. Please 
        fill out the form below to get started.
    </p>
    </hubspot-modal>
  `;
};


