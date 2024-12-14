/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { E as ENABLE_HTML_CONTENT_DEFAULT, a as sanitizeDOMString } from './config.js';
import { p as caretBackSharp, q as arrowDown } from './index7.js';
import { c as config, b as getIonMode } from './ionic-global.js';
import { e as supportsRubberBandScrolling } from './refresher.utils.js';
import { d as defineCustomElement$2, S as SPINNERS } from './spinner.js';
import { d as defineCustomElement$3 } from './icon.js';

const RefresherContent = /*@__PURE__*/ proxyCustomElement(class RefresherContent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.customHTMLEnabled = config.get('innerHTMLTemplatesEnabled', ENABLE_HTML_CONTENT_DEFAULT);
        this.pullingIcon = undefined;
        this.pullingText = undefined;
        this.refreshingSpinner = undefined;
        this.refreshingText = undefined;
    }
    componentWillLoad() {
        if (this.pullingIcon === undefined) {
            /**
             * The native iOS refresher uses a spinner instead of
             * an icon, so we need to see if this device supports
             * the native iOS refresher.
             */
            const hasRubberBandScrolling = supportsRubberBandScrolling();
            const mode = getIonMode(this);
            const overflowRefresher = hasRubberBandScrolling ? 'lines' : arrowDown;
            this.pullingIcon = config.get('refreshingIcon', mode === 'ios' && hasRubberBandScrolling ? config.get('spinner', overflowRefresher) : 'circular');
        }
        if (this.refreshingSpinner === undefined) {
            const mode = getIonMode(this);
            this.refreshingSpinner = config.get('refreshingSpinner', config.get('spinner', mode === 'ios' ? 'lines' : 'circular'));
        }
    }
    renderPullingText() {
        const { customHTMLEnabled, pullingText } = this;
        if (customHTMLEnabled) {
            return h("div", { class: "refresher-pulling-text", innerHTML: sanitizeDOMString(pullingText) });
        }
        return h("div", { class: "refresher-pulling-text" }, pullingText);
    }
    renderRefreshingText() {
        const { customHTMLEnabled, refreshingText } = this;
        if (customHTMLEnabled) {
            return h("div", { class: "refresher-refreshing-text", innerHTML: sanitizeDOMString(refreshingText) });
        }
        return h("div", { class: "refresher-refreshing-text" }, refreshingText);
    }
    render() {
        const pullingIcon = this.pullingIcon;
        const hasSpinner = pullingIcon != null && SPINNERS[pullingIcon] !== undefined;
        const mode = getIonMode(this);
        return (h(Host, { key: '19633bbcf02e3dba885d6bdcdaf2269bf4c8e2f5', class: mode }, h("div", { key: '28922e434a55a6cac0476fe2bee56941ce0d1c02', class: "refresher-pulling" }, this.pullingIcon && hasSpinner && (h("div", { key: 'fe575bf996021884677e9b23a3215d63caf894f5', class: "refresher-pulling-icon" }, h("div", { key: '59fe12297fd95bc33b8df8cd35316e2a1c084d91', class: "spinner-arrow-container" }, h("ion-spinner", { key: 'af9cc013ae04945c140b2865610ca73edb52ab48', name: this.pullingIcon, paused: true }), mode === 'md' && this.pullingIcon === 'circular' && (h("div", { key: '34df66ad1b0f706a0532957251aa2c20bf4587d8', class: "arrow-container" }, h("ion-icon", { key: 'ffdb5c123e606b823491c6c51cc2b497f62581bb', icon: caretBackSharp, "aria-hidden": "true" })))))), this.pullingIcon && !hasSpinner && (h("div", { key: 'ac3a2032bb969264d20fa057e9123441005d7a9d', class: "refresher-pulling-icon" }, h("ion-icon", { key: 'd969d10915548e72aae289b52154366f3dd39b31', icon: this.pullingIcon, lazy: false, "aria-hidden": "true" }))), this.pullingText !== undefined && this.renderPullingText()), h("div", { key: 'a8f854f81a94812d7bef8ce088331d94f49ff53d', class: "refresher-refreshing" }, this.refreshingSpinner && (h("div", { key: 'a1f646945370e40c844d62bc0c647443ae9dfbe7', class: "refresher-refreshing-icon" }, h("ion-spinner", { key: 'ab3ff4047769b6436e222b46d193c1e8b23e2fce', name: this.refreshingSpinner }))), this.refreshingText !== undefined && this.renderRefreshingText())));
    }
    get el() { return this; }
}, [0, "ion-refresher-content", {
        "pullingIcon": [1025, "pulling-icon"],
        "pullingText": [1, "pulling-text"],
        "refreshingSpinner": [1025, "refreshing-spinner"],
        "refreshingText": [1, "refreshing-text"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ion-refresher-content", "ion-icon", "ion-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ion-refresher-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, RefresherContent);
            }
            break;
        case "ion-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ion-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IonRefresherContent = RefresherContent;
const defineCustomElement = defineCustomElement$1;

export { IonRefresherContent, defineCustomElement };
