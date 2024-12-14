/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
export class SegmentContent {
    render() {
        return (h(Host, { key: '03684b2999ac64fe13e376fd7e7f279976e9d4f2' }, h("slot", { key: '143031075bf33ca19e7cfd76fc8a67b83ccaf11c' })));
    }
    static get is() { return "ion-segment-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["segment-content.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["segment-content.css"]
        };
    }
}
