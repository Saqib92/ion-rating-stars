/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { p as printIonWarning } from './index6.js';
import { c as createColorClasses } from './theme.js';
import { l as eye, m as eyeOff } from './index7.js';
import { b as getIonMode } from './ionic-global.js';
import { d as defineCustomElement$4 } from './button.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './ripple-effect.js';

const iosInputPasswordToggleCss = "";
const IonInputPasswordToggleIosStyle0 = iosInputPasswordToggleCss;

const mdInputPasswordToggleCss = "";
const IonInputPasswordToggleMdStyle0 = mdInputPasswordToggleCss;

const InputPasswordToggle = /*@__PURE__*/ proxyCustomElement(class InputPasswordToggle extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.togglePasswordVisibility = () => {
            const { inputElRef } = this;
            if (!inputElRef) {
                return;
            }
            inputElRef.type = inputElRef.type === 'text' ? 'password' : 'text';
        };
        this.color = undefined;
        this.showIcon = undefined;
        this.hideIcon = undefined;
        this.type = 'password';
    }
    /**
     * Whenever the input type changes we need to re-run validation to ensure the password
     * toggle is being used with the correct input type. If the application changes the type
     * outside of this component we also need to re-render so the correct icon is shown.
     */
    onTypeChange(newValue) {
        if (newValue !== 'text' && newValue !== 'password') {
            printIonWarning(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${newValue}" is not compatible.`, this.el);
            return;
        }
    }
    connectedCallback() {
        const { el } = this;
        const inputElRef = (this.inputElRef = el.closest('ion-input'));
        if (!inputElRef) {
            printIonWarning('No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.', el);
            return;
        }
        /**
         * Important: Set the type in connectedCallback because the default value
         * of this.type may not always be accurate. Usually inputs have the "password" type
         * but it is possible to have the input to initially have the "text" type. In that scenario
         * the wrong icon will show briefly before switching to the correct icon. Setting the
         * type here allows us to avoid that flicker.
         */
        this.type = inputElRef.type;
    }
    disconnectedCallback() {
        this.inputElRef = null;
    }
    render() {
        var _a, _b;
        const { color, type } = this;
        const mode = getIonMode(this);
        const showPasswordIcon = (_a = this.showIcon) !== null && _a !== void 0 ? _a : eye;
        const hidePasswordIcon = (_b = this.hideIcon) !== null && _b !== void 0 ? _b : eyeOff;
        const isPasswordVisible = type === 'text';
        return (h(Host, { key: 'd9811e25bfeb2aa197352bb9be852e9e420739d5', class: createColorClasses(color, {
                [mode]: true,
            }) }, h("ion-button", { key: '1eaea1442b248fb2b8d61538b27274e647a07804', mode: mode, color: color, fill: "clear", shape: "round", "aria-checked": isPasswordVisible ? 'true' : 'false', "aria-label": "show password", role: "switch", type: "button", onPointerDown: (ev) => {
                /**
                 * This prevents mobile browsers from
                 * blurring the input when the password toggle
                 * button is activated.
                 */
                ev.preventDefault();
            }, onClick: this.togglePasswordVisibility }, h("ion-icon", { key: '9c88de8f4631d9bde222ce2edf6950d639e04773', slot: "icon-only", "aria-hidden": "true", icon: isPasswordVisible ? hidePasswordIcon : showPasswordIcon }))));
    }
    get el() { return this; }
    static get watchers() { return {
        "type": ["onTypeChange"]
    }; }
    static get style() { return {
        ios: IonInputPasswordToggleIosStyle0,
        md: IonInputPasswordToggleMdStyle0
    }; }
}, [33, "ion-input-password-toggle", {
        "color": [513],
        "showIcon": [1, "show-icon"],
        "hideIcon": [1, "hide-icon"],
        "type": [1025]
    }, undefined, {
        "type": ["onTypeChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-input-password-toggle", "ion-button", "ion-icon", "ion-ripple-effect"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-input-password-toggle":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InputPasswordToggle);
            }
            break;
        case "ion-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ion-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ion-ripple-effect":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IonInputPasswordToggle = InputPasswordToggle;
const defineCustomElement = defineCustomElement$1;

export { IonInputPasswordToggle, defineCustomElement };
