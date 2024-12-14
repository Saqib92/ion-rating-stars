/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-73f75efb.js');

const segmentContentCss = ":host{scroll-snap-align:center;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}";
const IonSegmentContentStyle0 = segmentContentCss;

const SegmentContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '03684b2999ac64fe13e376fd7e7f279976e9d4f2' }, index.h("slot", { key: '143031075bf33ca19e7cfd76fc8a67b83ccaf11c' })));
    }
};
SegmentContent.style = IonSegmentContentStyle0;

exports.ion_segment_content = SegmentContent;
