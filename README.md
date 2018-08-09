# get-pseudo-states

Returns the CSS pseudo-selector states for a given DOM element.

## Usage

```javascript
import { getPseudoStates } from 'get-pseudo-states'

const el = document.querySelector('button')
const states = getPseudoStates(el)

if (states['first-of-type']) {
  // do something
}
```

## Returned Pseudo States

All non-function and non-atrule pseudo-selector values are returned as booleans.

```typescript
{
  'active': boolean,
  'any-link': boolean,
  'checked': boolean,
  'default': boolean,
  'defined': boolean,
  'disabled': boolean,
  'empty': boolean,
  'enabled': boolean,
  'first-child': boolean,
  'first-of-type': boolean,
  'focus': boolean,
  'host': boolean,
  'hover': boolean,
  'in-range': boolean,
  'indeterminate': boolean,
  'invalid': boolean,
  'last-child': boolean,
  'last-of-type': boolean,
  'link': boolean,
  'only-child': boolean,
  'only-of-type': boolean,
  'optional': boolean,
  'out-of-range': boolean,
  'read-only': boolean,
  'read-write': boolean,
  'required': boolean,
  'root': boolean,
  'scope': boolean,
  'target': boolean,
  'valid': boolean,
  'visited': boolean
}
```
