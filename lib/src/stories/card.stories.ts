import { html } from 'lit';
import '../components/card.js';


export default {
  title: 'Card',
  component: 'hubspot-card',
};

const CtaButton = () => html`
  <style>
    .hs-cta-wrapper {
      display: inline-block;
    }
    .cta_button {
      display: inline-block;
      padding: 1rem 1.5rem;
      background: black;
      color: white;
      border-radius: 0.5rem;
      text-align: center;
      text-decoration: none;
      transition: background 0.2s ease-in-out;
    }
    .cta_button:hover {
      background: #21277e;
    }
  </style>

  <span class="hs-cta-wrapper" id="hs-cta-wrapper-custom_button">
    <span class="hs-cta-node" id="hs-cta-hubspot-custom_button" style="visibility: visible;" data-hs-drop="true">
      <a id="cta_button_id" class="cta_button" href="https://kingpoststudio.com/" style="" cta_dest_link="https://tlhfckoctbcr.com/" title="Call-to-Action">
        Call-to-Action
      </a>
    </span>
  </span>
`;

export const Base = () => {
  return html`
    <hubspot-card>
      <h2 slot="title">Lorem Ipsum</h2>
      <div slot="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div slot="cta">
        ${CtaButton()}
      </div>
    </hubspot-card>
  `;
};
