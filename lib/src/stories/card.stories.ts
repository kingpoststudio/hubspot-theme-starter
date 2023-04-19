import { html } from 'lit';
import '../components/card.js';


// Setup Storybook actions so I can change the theme of the hubspot-card.
// https://storybook.js.org/docs/react/essentials/actions
export default {
  title: 'Card',
  component: 'hubspot-card',
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: {
        type: 'select',
      },
      defaultValue: 'dark',
    },
  },
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

export const Base = (args) => {
  return html`
    <hubspot-card theme="${args.theme}">
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
