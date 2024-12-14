/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { getIonMode } from "../../global/ionic-global";
export class ItemGroup {
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: 'f9ffe0290d3fa546494fe55f952d8554f2a8abf8', role: "group", class: {
                [mode]: true,
                // Used internally for styling
                [`item-group-${mode}`]: true,
                item: true,
            } }));
    }
    static get is() { return "ion-item-group"; }
    static get originalStyleUrls() {
        return {
            "ios": ["item-group.ios.scss"],
            "md": ["item-group.md.scss"]
        };
    }
    static get styleUrls() {
        return {
            "ios": ["item-group.ios.css"],
            "md": ["item-group.md.css"]
        };
    }
}
