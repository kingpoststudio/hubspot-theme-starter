import { html } from 'lit';
import '../components/media-card.js';


// Setup Storybook actions so I can change the theme of the hubspot-card.
// https://storybook.js.org/docs/react/essentials/actions
export default {
  title: 'Media Card',
  component: 'hubspot-media-card'
};


export const Base = () => {
  return html`
    <hubspot-media-card>
      <img src="https://picsum.photos/200/300" slot="image" />
      <h3 slot="title"> Title </h3>
      <button slot="button"> Button </button>
    </hubspot-media-card>
  `;
};
