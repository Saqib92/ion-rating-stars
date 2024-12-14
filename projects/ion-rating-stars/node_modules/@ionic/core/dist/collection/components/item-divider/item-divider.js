/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { createColorClasses } from "../../utils/theme";
import { getIonMode } from "../../global/ionic-global";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot start - Content is placed to the left of the divider text in LTR, and to the right in RTL.
 * @slot end - Content is placed to the right of the divider text in LTR, and to the left in RTL.
 */
export class ItemDivider {
    constructor() {
        this.color = undefined;
        this.sticky = false;
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: '6cff318230a9b2a9db529df154285d3dd9822efe', class: createColorClasses(this.color, {
                [mode]: true,
                'item-divider-sticky': this.sticky,
                item: true,
            }) }, h("slot", { key: 'eb50dfab74ab0fd13697db17ecd60e8fa0bf1750', name: "start" }), h("div", { key: '2806efd89d086f4fb844a479d9c095e1e0775713', class: "item-divider-inner" }, h("div", { key: '77b7d5fa987e5f1c26d8023cd1f974a8a263a3de', class: "item-divider-wrapper" }, h("slot", { key: 'dbafb0deb140a19a2a9748fd5b48760c39c6fd2e' })), h("slot", { key: 'ef9a848fe21e84ef21cd273b8a4d9f95f558175b', name: "end" }))));
    }
    static get is() { return "ion-item-divider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "ios": ["item-divider.ios.scss"],
            "md": ["item-divider.md.scss"]
        };
    }
    static get styleUrls() {
        return {
            "ios": ["item-divider.ios.css"],
            "md": ["item-divider.md.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Color",
                    "resolved": "\"danger\" | \"dark\" | \"light\" | \"medium\" | \"primary\" | \"secondary\" | \"success\" | \"tertiary\" | \"warning\" | string & Record<never, never> | undefined",
                    "references": {
                        "Color": {
                            "location": "import",
                            "path": "../../interface",
                            "id": "src/interface.d.ts::Color"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The color to use from your application's color palette.\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\nFor more information on colors, see [theming](/docs/theming/basics)."
                },
                "attribute": "color",
                "reflect": true
            },
            "sticky": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "When it's set to `true`, the item-divider will stay visible when it reaches the top\nof the viewport until the next `ion-item-divider` replaces it.\n\nThis feature relies in `position:sticky`:\nhttps://caniuse.com/#feat=css-sticky"
                },
                "attribute": "sticky",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "el"; }
}
