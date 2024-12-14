/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { getIonMode } from "../../global/ionic-global";
export class Thumbnail {
    render() {
        return (h(Host, { key: 'cfa9aeb1d4fd624a9732c5230d29dd887e4b7771', class: getIonMode(this) }, h("slot", { key: '29bc6e64063cba44e2643228df54394883933918' })));
    }
    static get is() { return "ion-thumbnail"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["thumbnail.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["thumbnail.css"]
        };
    }
}
