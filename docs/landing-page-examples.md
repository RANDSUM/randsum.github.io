---
title: 'RANDSUM Landing Page Examples'
description: 'TypeScript examples for RANDSUM package landing pages'
author: 'RANDSUM Team'
lastModified: '2024-01-15'
tags: ['examples', 'typescript', 'landing-pages', 'packages']
---

## roller

```ts
import { roll, validateNotation } from '@RANDSUM/ROLLER'

const notation = '4d6L'
const { valid, description, digested } = validateNotation(notation)
console.log(description) // Roll 4 6-sided dice, drop lowest
if (digested) {
  const { total } = roll()
  console.log(total)
}
```

## fifth

```ts
import { rollAdvantage, rollDisadvantage } from '@RANDSUM/FIFTH'

// Roll with advantage (2d20, keep highest)
const advantageRoll = rollAdvantage()
console.log(advantageRoll.total)

// Roll with disadvantage (2d20, keep lowest)
const disadvantageRoll = rollDisadvantage()
console.log(disadvantageRoll.total)
```
