/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { getIonMode } from "../../global/ionic-global";
export class Row {
    render() {
        return (h(Host, { key: 'aea072a5005e3f1f309f0d1ae5be5ee19869b035', class: getIonMode(this) }, h("slot", { key: '2a481c2126ac6ca65f0a1bbd07c2d3365409cb78' })));
    }
    static get is() { return "ion-row"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["row.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["row.css"]
        };
    }
}
