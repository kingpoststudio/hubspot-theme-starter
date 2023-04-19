import { html } from 'lit';
import '../components/container.js';


export default {
  title: 'Container',
  component: 'hubspot-container',
};

export const Container = () => {
  return html`
    <hubspot-container>
      Test.
    </hubspot-container>
  `;
};
