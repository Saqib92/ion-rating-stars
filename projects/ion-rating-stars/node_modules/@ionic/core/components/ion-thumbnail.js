/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { b as getIonMode } from './ionic-global.js';

const thumbnailCss = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}";
const IonThumbnailStyle0 = thumbnailCss;

const Thumbnail = /*@__PURE__*/ proxyCustomElement(class Thumbnail extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'cfa9aeb1d4fd624a9732c5230d29dd887e4b7771', class: getIonMode(this) }, h("slot", { key: '29bc6e64063cba44e2643228df54394883933918' })));
    }
    static get style() { return IonThumbnailStyle0; }
}, [1, "ion-thumbnail"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-thumbnail"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-thumbnail":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Thumbnail);
            }
            break;
    } });
}

const IonThumbnail = Thumbnail;
const defineCustomElement = defineCustomElement$1;

export { IonThumbnail, defineCustomElement };
