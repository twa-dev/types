## Types
Types for [Telegram Web Apps (TWA)](https://core.telegram.org/bots/webapps) SDK.

```
npm i @twa-dev/types
```

### Usage Example

```ts
import { Telegram } from "@twa-dev/types"

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

window.Telegram.WebApp.HapticFeedback.notificationOccurred("success");
```

### Exported Types
- [`WebAppUser`](https://core.telegram.org/bots/webapps#webappuser)
- [`WebAppChat`](https://core.telegram.org/bots/webapps#webappchat)
- [`WebAppInitData`](https://core.telegram.org/bots/webapps#webappinitdata)
- [`ThemeParams`](https://core.telegram.org/bots/webapps#themeparams)
- [`HapticFeedback`](https://core.telegram.org/bots/webapps#hapticfeedback)
- [`BackButton`](https://core.telegram.org/bots/webapps#backbutton)
- [`MainButton`](https://core.telegram.org/bots/webapps#mainbutton)
- [`EventNames`](https://core.telegram.org/bots/webapps#events-available-for-web-apps)
- [`EventParams`](https://core.telegram.org/bots/webapps#events-available-for-web-apps)
- [`PopupParams`](https://core.telegram.org/bots/webapps#popupparams)
- [`PopupButton`](https://core.telegram.org/bots/webapps#popupbutton)
- [`WebApp`](https://core.telegram.org/bots/webapps#initializing-web-apps)
