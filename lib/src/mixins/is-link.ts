import { LitElement } from "lit";
import { property } from "lit/decorators.js";

export type Constructor<T = {}> = new (...args: any[]) => T;

interface IsLinkInterface {
  href: string;
  target: string;
  linkLabel: string;
}

export const IsLink = <T extends Constructor<LitElement>>(superClass: T) => {
  class IsLink extends superClass {
    @property({ type: String })
    href = '';

    @property({ type: String })
    target: '_self' | '_blank' | '_parent' | '_top' = '_self';

    @property({ type: String, attribute: 'link-label' })
    linkLabel: string = 'Learn more';
  }

  return IsLink as Constructor<IsLinkInterface> & T;
}
