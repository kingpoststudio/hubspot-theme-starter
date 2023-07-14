## HubSpot Theme Starter

### Lit + HubSpot = ❤️
Lit and HubSpot was a match made in heaven, for several reasons:
1.  Lit provides a native way to develop components using JavaScript that are reactive, lightweight and modern. It is a modular library and development is similar to React and Vue, but is native to the browser and is SEO-friendly.
2.  Lit components pair well with HubSpot templates and modules because they can utilize slots to accept content from HubSpot’s CMS via HubL. This includes elements dependent on HubSpot scripts, like CTAs and forms.
3.  LitElement classes are highly extendable and customizable. A base component can be shared among many HubSpot themes, styled by either extending a new LitElement from the base class, or by CSS variables, or both.
4.  I can use Storybook, a UI toolkit, to develop the components rapidly and outside of the HubSpot feedback loop. I gain hot module replacement (HMR), and I can mock my HubSpot-rendered elements within my stories and yield the same results when deployed to production.
5.  With Vite, I can easily separate production-ready Lit components into multiple files to be managed by my HubSpot theme’s modules. Vite uses ESBuild to pre-bundle dependencies and is remarkably fast.
6. Google maintains the Lit library and its associated tooling. It has excellent documentation and steady adoption, and updates are frequent and meaningful.
I have since adopted the framework into my HubSpot theme workflow full-time. I’ll show you how I do it.

### References and Helpful Links
HubSpot Theme Starter
Vite + Lit + TS preset
Web Components Storybook Installation
Lit Documentation
