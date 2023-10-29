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
      <h3 slot="title"> Hello World of Images </h3>
      <p slot="description"> 
      Welcome to a world of captivating visuals where images tell 
      stories. Explore a diverse collection of images that traverse landscapes, cultures, and 
      imaginations. Whether you're a coding enthusiast or simply an 
      admirer of the pixelated, this is your 'Hello World' to stunning 
      visuals.
      </p>
      <button slot="button"> Explore! </button>
    </hubspot-media-card>
  `;
};
