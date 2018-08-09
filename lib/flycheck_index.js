"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PSEUDOS = Object.freeze([
    'active',
    'any-link',
    'checked',
    'default',
    'defined',
    'disabled',
    'empty',
    'enabled',
    'first-child',
    'first-of-type',
    'focus',
    'host',
    'hover',
    'indeterminate',
    'in-range',
    'invalid',
    'last-child',
    'last-of-type',
    'link',
    'only-child',
    'only-of-type',
    'optional',
    'out-of-range',
    'read-only',
    'read-write',
    'required',
    'root',
    'scope',
    'target',
    'valid',
    'visited'
]);
function getPseudoStates(el) {
    var tagName = el.tagName;
    var buf = {};
    for (var _i = 0, PSEUDOS_1 = exports.PSEUDOS; _i < PSEUDOS_1.length; _i++) {
        var pseudo = PSEUDOS_1[_i];
        buf[pseudo] = el.matches(tagName + ":" + pseudo);
    }
    return buf;
}
exports.getPseudoStates = getPseudoStates;
function getPseudoState(el, pseudo) {
    return el.matches(el.tagName + ":" + pseudo);
}
exports.getPseudoState = getPseudoState;
exports.default = getPseudoStates;
//# sourceMappingURL=flycheck_index.js.map