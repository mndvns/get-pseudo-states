export const PSEUDOS = Object.freeze([
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
])

export function getPseudoStates(el: Element) {
  const tagName = el.tagName
  const buf: {[pseudo: string]: boolean} = {}
  for (const pseudo of PSEUDOS) {
    buf[pseudo] = el.matches(`${tagName}:${pseudo}`)
  }
  return buf
}

export function getPseudoState(el: Element, pseudo: string) {
  return el.matches(`${el.tagName}:${pseudo}`)
}

export default getPseudoStates
