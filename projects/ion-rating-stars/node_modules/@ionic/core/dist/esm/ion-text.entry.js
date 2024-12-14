/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, h, f as Host } from './index-28849c61.js';
import { c as createColorClasses } from './theme-01f3f29c.js';
import { b as getIonMode } from './ionic-global-c81d82ab.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";
const IonTextStyle0 = textCss;

const Text = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.color = undefined;
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: 'e134d70c04344b708a2ecf6253722781ad2ca826', class: createColorClasses(this.color, {
                [mode]: true,
            }) }, h("slot", { key: 'da79c760f7ebbcd007ce110439f05a62cb22eac8' })));
    }
};
Text.style = IonTextStyle0;

export { Text as ion_text };
