import { html } from 'lit';
import '../modules/hero-banner.js';
import '../styles/styles.css';

export default {
  title: 'Hero Banner',
  component: 'hubspot-hero-banner',
};

const CtaButton = () => html`
  <span class="hs-cta-wrapper" id="hs-cta-wrapper-custom_button">
    <span class="hs-cta-node" id="hs-cta-hubspot-custom_button" style="visibility: visible;" data-hs-drop="true">
      <a id="cta_button_id" class="cta_button" href="https://kingpoststudio.com/" style="" cta_dest_link="https://tlhfckoctbcr.com/" title="Call-to-Action">
        Call-to-Action
      </a>
    </span>
  </span>
`;

export const Container = () => {
  return html`
    <hubspot-hero-banner>
      <h1 slot="title">Lorem ipsum dolor sit.</h1>
      <p slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      <div slot="cta">
        ${CtaButton()}
      </div>
    </hubspot-hero-banner>
  `;
};
