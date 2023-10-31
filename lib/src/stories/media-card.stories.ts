import { html } from 'lit';
import '../components/media-card.js';
import '../styles/styles.css';

export default {
  title: 'Media Card',
  component: 'hubspot-media-card',
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

export const Default = (args) => {
  return html`
    <hubspot-media-card theme="${args.theme}">
      <img src="https://picsum.photos/800" slot="image" />
      <h3 slot="title">Hello World of Images</h3>
      <p slot="description">Welcome to a world of captivating visuals where images tell 
      stories. Explore a diverse collection of images that traverse landscapes, cultures, and 
      imaginations. Whether you're a coding enthusiast or simply an 
      admirer of the pixelated, this is your 'Hello World' to stunning 
      visuals.</p>
      <button slot="button">Explore!</button>
    </hubspot-media-card>
  `;
};


