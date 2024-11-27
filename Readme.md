## Types

[![npm version](https://img.shields.io/npm/v/@twa-dev/types)](https://www.npmjs.com/package/@twa-dev/types)

Types for [Telegram Web Apps (TWA)](https://core.telegram.org/bots/webapps) SDK.

![ts_AdobeExpress (2)](https://user-images.githubusercontent.com/5061840/184690893-d875b355-f8d3-44e8-824c-eb7728e89768.gif)

### Installation

```
npm i @twa-dev/types
```

### Usage Example

```ts
import { Telegram } from "@twa-dev/types";

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
- [`BottomButton`](https://core.telegram.org/bots/webapps#bottombutton)
- `MainButton`
- `SecondaryButton`
- [`SettingsButton`](https://core.telegram.org/bots/webapps#settingsbutton)
- [`EventNames`](https://core.telegram.org/bots/webapps#events-available-for-web-apps)
- [`EventParams`](https://core.telegram.org/bots/webapps#events-available-for-web-apps)
- [`PopupParams`](https://core.telegram.org/bots/webapps#popupparams)
- [`PopupButton`](https://core.telegram.org/bots/webapps#popupbutton)
- [`WebApp`](https://core.telegram.org/bots/webapps#initializing-web-apps)
- [`ScanQrPopupParams`](https://core.telegram.org/bots/webapps#scanqrpopupparams)
- [`CloudStorage`](https://core.telegram.org/bots/webapps#cloudstorage)
- [`BiometricManager`](https://core.telegram.org/bots/webapps#biometricmanager)
- [`BiometricRequestAccessParams`](https://core.telegram.org/bots/webapps#biometricrequestaccessparams)
- [`BiometricAuthenticateParams`](https://core.telegram.org/bots/webapps#biometricauthenticateparams)
- [`StoryShareParams`](https://core.telegram.org/bots/webapps#storyshareparams)
- [`StoryWidgetLink`](https://core.telegram.org/bots/webapps#storywidgetlink)
- [`Accelerometer`](https://core.telegram.org/bots/webapps#accelerometer)
- [`DeviceOrientation`](https://core.telegram.org/bots/webapps#deviceorientation)
- [`DeviceOrientationStartParams`](https://core.telegram.org/bots/webapps#deviceorientationstartparams)
- [`Gyroscope`](https://core.telegram.org/bots/webapps#gyroscope)
- [`GyroscopeStartParams`](https://core.telegram.org/bots/webapps#gyroscopestartparams)
- [`LocationManager`](https://core.telegram.org/bots/webapps#locationmanager)
- [`LocationData`](https://core.telegram.org/bots/webapps#locationdata)
- [`SafeAreaInset`](https://core.telegram.org/bots/webapps#safeareainset)
- [`ContentSafeAreaInset`](https://core.telegram.org/bots/webapps#contentsafeareainset)
- [`EmojiStatusParams`](https://core.telegram.org/bots/webapps#emojistatusparams)
- [`DownloadFileParams`](https://core.telegram.org/bots/webapps#downloadfileparams)
- `Platforms`
