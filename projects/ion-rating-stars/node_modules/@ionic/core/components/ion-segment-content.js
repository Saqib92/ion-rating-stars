/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const segmentContentCss = ":host{scroll-snap-align:center;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}";
const IonSegmentContentStyle0 = segmentContentCss;

const SegmentContent = /*@__PURE__*/ proxyCustomElement(class SegmentContent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '03684b2999ac64fe13e376fd7e7f279976e9d4f2' }, h("slot", { key: '143031075bf33ca19e7cfd76fc8a67b83ccaf11c' })));
    }
    static get style() { return IonSegmentContentStyle0; }
}, [1, "ion-segment-content"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-segment-content"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-segment-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SegmentContent);
            }
            break;
    } });
}

const IonSegmentContent = SegmentContent;
const defineCustomElement = defineCustomElement$1;

export { IonSegmentContent, defineCustomElement };
