
## Getting Started

Install Package: `yarn add @betting-api/subs`

### Authorization

To start using api, you need to create app at 
https://betting-api.com/console

Then authorize all your clients by command:

```typescript
import subsClient from '@betting-api/subs'

subsClient.registerApp(secreyKey)

subsClient.connect()
```

## Usage

Open connection and make your subs.

```typescript
import subsClient from '@betting-api/subs'

subsClient.xBet.subscribe({
    event: 'onMatchAppear',
    category: 'football',
    isLive: true,
})
```

or 

```typescript
import subsClient from '@betting-api/subs'

subsClient.subscribe({
    service: '1xbet',
    event: 'onMatchAppear',
    category: 'football',
    isLive: true,
})
```

Now you can listen these events:
```typescript
import subsClient from '@betting-api/subs'

subsClient.on('onMatchAppear', payload => {
    const {
      category, service, isLive, data,
    } = payload

    console.log('onMatchAppear', payload)

    switch (service) {
      case '1xbet': {
        xBet.processMatch(data) // { id: '12345' }
        break
      }
   }
}



```

## Api

#### category
- `football`

*Currently supported only one category.

#### event
- `onMatchAppear`
- `onMatchDisappear`
- `onLeagueAppear`
- `onLeagueDisappear`

#### service
- `1xbet`
- `parimatch`
- `marathonbet`
- `fonbet`
- `sbobet`
- `leonbets`
- `betway`
- `ggbet`

#### isLive
- `true` - receive only live events
- `false` - receive only prematch events
