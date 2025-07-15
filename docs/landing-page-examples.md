---
title: 'RANDSUM Landing Page Examples'
description: 'TypeScript examples for RANDSUM package landing pages'
author: 'RANDSUM Team'
lastModified: '2024-01-15'
tags: ['examples', 'typescript', 'landing-pages', 'packages']
---

## roller

```ts
import { roll, validateNotation } from '@randsum/roller'

const userInput = '4d6L'
const { valid, description, notation } = validateNotation(userInput)
console.log(description) // Roll 4 6-sided dice, drop lowest
if (valid && notation) {
  const { total } = roll(notation)
}
```

## blades

```ts
import { rollBlades } from '@randsum/blades'

const roll = rollBlades(4) // roll 2 d6, add 4
console.log(roll.result) // 'critical' | 'success' | 'partial' | 'failure'
```

## fifth

```ts
import { d20roll } from '@randsum/fifth'

// Different d20 roll types
const advantage = d20roll({ modifier: 5, advantage: true }) // 2d20, Drop Lowest, Add 5
console.log(advantage.details.total)
```

## daggerheart

```ts
import { rollDaggerheart, meetOrBeatDaggerheart } from '@randsum/daggerheart'

// Duality dice rolls with hope/fear mechanics
const basic = rollDaggerheart({ modifier: 2 }) // Roll 2d8+2
const withAdvantage = rollDaggerheart({ modifier: 3, rollingWith: 'Advantage' }) // Roll 2d8+3 + 1D6 Advantage Die
const amplified = rollDaggerheart({ modifier: 1, amplifyHope: true }) // Roll 1d8 Fear Die, 1d20 Hope die, add one

// Check against target number
const success = meetOrBeatDaggerheart(12, { modifier: 2 })
console.log(basic.details.type, success.details.success) // 'hope'/'fear'/'critical hope', true/false
```

## root-rpg

```ts
import { rollRootRpg } from '@randsum/root-rpg'

const roll = rollRootRpg(0) // No bonus

console.log(roll.result) // 'Strong Hit' | 'Weak Hit' | 'Miss'
console.log(roll.details.roll) // 2d6 + modifier total
```

## salvageunion

```ts
import { rollTable } from '@randsum/salvageunion'

// Different table types
const action = rollTable('Core Mechanic') // Standard action

console.log(action.result) // "Nailed it!"
console.log(action.details.description)
```
