/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-73f75efb.js');
const theme = require('./theme-d1c573d2.js');
const ionicGlobal = require('./ionic-global-d9a8bb5b.js');

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";
const IonTextStyle0 = textCss;

const Text = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
    }
    render() {
        const mode = ionicGlobal.getIonMode(this);
        return (index.h(index.Host, { key: 'e134d70c04344b708a2ecf6253722781ad2ca826', class: theme.createColorClasses(this.color, {
                [mode]: true,
            }) }, index.h("slot", { key: 'da79c760f7ebbcd007ce110439f05a62cb22eac8' })));
    }
};
Text.style = IonTextStyle0;

exports.ion_text = Text;
