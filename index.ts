export interface WebAppUser {
  id: number;
  is_bot?: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
}

export interface WebAppChat {
  id: number;
  type: "group" | "supergroup" | "channel";
  title: string;
  username?: string;
  photo_url?: string;
}

export interface WebAppInitData {
  query_id?: string;
  auth_date: number;
  hash: string;
  user?: WebAppUser & {
    added_to_attachment_menu?: boolean;
    allows_write_to_pm?: boolean;
  };
  receiver?: WebAppUser;
  start_param?: string;
  can_send_after?: number;
  chat?: WebAppChat;
  chat_type?: "sender" | "private" | "group" | "supergroup" | "channel";
  chat_instance?: string;
  signature: string;
}

export interface ThemeParams {
  bg_color: `#${string}`;
  secondary_bg_color: `#${string}`;
  text_color: `#${string}`;
  hint_color: `#${string}`;
  link_color: `#${string}`;
  button_color: `#${string}`;
  button_text_color: `#${string}`;
  header_bg_color: `#${string}`;
  accent_text_color: `#${string}`;
  section_bg_color: `#${string}`;
  section_header_text_color: `#${string}`;
  subtitle_text_color: `#${string}`;
  destructive_text_color: `#${string}`;
  section_separator_color: `#${string}`;
  bottom_bar_bg_color: `#${string}`;
}

export interface HapticFeedback {
  impactOccurred: (
    style: "light" | "medium" | "heavy" | "rigid" | "soft"
  ) => HapticFeedback;
  notificationOccurred: (
    type: "error" | "success" | "warning"
  ) => HapticFeedback;
  selectionChanged: () => HapticFeedback;
}

type CloudStorageKey = string;
type CloudStorageValue = string;

interface CloudStorageItems {
  [key: CloudStorageKey]: CloudStorageValue;
}

export interface CloudStorage {
  setItem: (
    key: CloudStorageKey,
    value: CloudStorageValue,
    callback?: (error: string | null, result?: boolean) => void
  ) => void;
  getItem: (
    key: CloudStorageKey,
    callback?: (error: string | null, result?: CloudStorageValue) => void
  ) => void;
  getItems: (
    keys: Array<CloudStorageKey>,
    callback?: (error: string | null, result?: CloudStorageItems) => void
  ) => void;
  getKeys: (
    callback?: (error: string | null, result?: Array<CloudStorageKey>) => void
  ) => void;
  removeItem: (
    key: CloudStorageKey,
    callback?: (error: string | null, result?: boolean) => void
  ) => void;
  removeItems: (
    key: Array<CloudStorageKey>,
    callback?: (error: string | null, result?: boolean) => void
  ) => void;
}

export interface BackButton {
  isVisible: boolean;
  show: VoidFunction;
  hide: VoidFunction;
  onClick: (cb: VoidFunction) => void;
  offClick: (cb: VoidFunction) => void;
}

type BottomButtonParams = {
  color?: string;
  text?: string;
  text_color?: string;
  is_active?: boolean;
  is_visible?: boolean;
  has_shine_effect?: boolean;
};

export interface BottomButton {
  isActive: boolean;
  isVisible: boolean;
  isProgressVisible: boolean;
  text: string;
  color: `#${string}`;
  textColor: `#${string}`;
  show: VoidFunction;
  hide: VoidFunction;
  enable: VoidFunction;
  disable: VoidFunction;
  hideProgress: VoidFunction;
  showProgress: (leaveActive?: boolean) => void;
  onClick: (callback: VoidFunction) => void;
  offClick: (callback: VoidFunction) => void;
  setText: (text: string) => void;
  setParams: (params: BottomButtonParams) => void;
  hasShineEffect: string;
}

export type MainButton = BottomButton;

export interface SecondaryButton extends BottomButton {
  position: "top" | "left" | "bottom" | "right";
  setParams: (
    params: BottomButtonParams & {
      position?: SecondaryButton["position"];
    }
  ) => void;
}

export interface SettingsButton {
  isVisible: boolean;
  onClick: (callback: VoidFunction) => SettingsButton;
  offClick: (callback: VoidFunction) => SettingsButton;
  show: () => SettingsButton;
  hide: () => SettingsButton;
}

export type InvoiceStatuses = "pending" | "failed" | "cancelled" | "paid";

export type EventNames =
  | "invoiceClosed"
  | "settingsButtonClicked"
  | "backButtonClicked"
  | "mainButtonClicked"
  | "secondaryButtonClicked"
  | "viewportChanged"
  | "themeChanged"
  | "popupClosed"
  | "qrTextReceived"
  | "clipboardTextReceived"
  | "writeAccessRequested"
  | "contactRequested"
  | "scanQrPopupClosed";

export type EventParams = {
  invoiceClosed: { url: string; status: InvoiceStatuses };
  settingsButtonClicked: void;
  backButtonClicked: void;
  mainButtonClicked: void;
  secondaryButtonClicked: void;
  viewportChanged: { isStateStable: boolean };
  themeChanged: void;
  popupClosed: { button_id: string | null };
  qrTextReceived: { data: string };
  clipboardTextReceived: { data: string };
  writeAccessRequested: { status: "allowed" | "cancelled" };
  contactRequested: { status: "sent" | "cancelled" };
  scanQrPopupClosed: void;
};

export type PopupParams = {
  title?: string;
  message: string;
  buttons?: PopupButton[];
};

export type PopupButton = {
  id?: string;
} & (
  | {
      type: "default" | "destructive";
      text: string;
    }
  | {
      type: "ok" | "close" | "cancel";
    }
);

export type ScanQrPopupParams = {
  text?: string;
};

export type Platforms =
  | "android"
  | "android_x"
  | "ios"
  | "macos"
  | "tdesktop"
  | "weba"
  | "webk"
  | "unigram"
  | "unknown";

export type BiometricRequestAccessParams = {
  reason?: string;
};

export type BiometricAuthenticateParams = {
  reason?: string;
};

export type AccelerometerStartParams = {
  refresh_rate?: number;
};

export type Accelerometer = {
  isStarted: boolean;
  x: number;
  y: number;
  z: number;
  start: (
    params: AccelerometerStartParams,
    callback?: (isStarted: boolean) => void
  ) => Accelerometer;
  stop: (callback?: (isStopped: boolean) => void) => Accelerometer;
};

export type DeviceOrientationStartParams = {
  refresh_rate?: number;
  need_absolute?: boolean;
};

export type DeviceOrientation = {
  isStarted: boolean;
  absolute: boolean;
  alpha: number;
  beta: number;
  gamma: number;
  start: (
    params: DeviceOrientationStartParams,
    callback?: (isStarted: boolean) => void
  ) => DeviceOrientation;
  stop: (callback?: (isStopped: boolean) => void) => DeviceOrientation;
};

export type GyroscopeStartParams = {
  refresh_rate?: number;
};

export type Gyroscope = {
  isStarted: boolean;
  x: number;
  y: number;
  z: number;
  start: (
    params: GyroscopeStartParams,
    callback?: (isStarted: boolean) => void
  ) => Gyroscope;
  stop: (callback?: (isStopped: boolean) => void) => Gyroscope;
};

export type LocationData = {
  latitude: number;
  longitude: number;
  altitude: number;
  course: number;
  speed: number;
  horizontal_accuracy: number;
  vertical_accuracy: number;
  course_accuracy: number;
  speed_accuracy: number;
};

export type LocationManager = {
  isInited: boolean;
  isLocationAvailable: boolean;
  isAccessRequested: boolean;
  isAccessGranted: boolean;
  init: (callback?: (isInitialized: boolean) => void) => LocationManager;
  getLocation: (
    callback: (data: LocationData | null) => void
  ) => LocationManager;
  openSettings: () => LocationManager;
};

export type BiometricManager = {
  isInited: boolean;
  isBiometricAvailable: boolean;
  biometricType: "finger" | "face" | "unknown";
  isAccessRequested: boolean;
  isAccessGranted: boolean;
  isBiometricTokenSaved: boolean;
  deviceId: string;
  init: (callback?: VoidFunction) => BiometricManager;
  requestAccess: (
    params: BiometricRequestAccessParams,
    callback?: (isAccessGranted: boolean) => void
  ) => BiometricManager;
  authenticate: (
    params: BiometricAuthenticateParams,
    callback?: (isAuthenticated: boolean) => void
  ) => BiometricManager;
  updateBiometricToken: (
    token: string,
    callback?: (isBiometricTokenUpdated: boolean) => void
  ) => BiometricManager;
  openSettings: () => BiometricManager;
};

export type StoryWidgetLink = {
  url: string;
  name?: string;
};

export type ShareStoryParams = {
  text?: string;
  widget_link?: StoryWidgetLink;
};

export type SafeAreaInset = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export type ContentSafeAreaInset = SafeAreaInset;

export type HomeScreenStatus = "unsupported" | "unknown" | "added" | "missed";

export type EmojiStatusParams = {
  duration?: number;
};

export type DownloadFileParams = {
  url: string;
  file_name: string;
};

export interface WebApp {
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  platform: Platforms;
  headerColor: `#${string}`;
  backgroundColor: `#${string}`;
  isClosingConfirmationEnabled: boolean;
  themeParams: ThemeParams;
  initDataUnsafe: WebAppInitData;
  initData: string;
  colorScheme: "light" | "dark";
  onEvent: <T extends EventNames>(
    eventName: T,
    callback: (params: EventParams[T]) => unknown
  ) => void;
  offEvent: <T extends EventNames>(
    eventName: T,
    callback: (params: EventParams[T]) => unknown
  ) => void;
  sendData: (data: unknown) => void;
  close: VoidFunction;
  expand: VoidFunction;
  MainButton: MainButton;
  SecondaryButton: SecondaryButton;
  HapticFeedback: HapticFeedback;
  CloudStorage: CloudStorage;
  openLink: (link: string, options?: { try_instant_view: boolean }) => void;
  openTelegramLink: (link: string) => void;
  BackButton: BackButton;
  SettingsButton: SettingsButton;
  version: string;
  isVersionAtLeast: (version: string) => boolean;
  openInvoice: (
    url: string,
    callback?: (status: InvoiceStatuses) => unknown
  ) => void;
  setHeaderColor: (
    color: "bg_color" | "secondary_bg_color" | `#${string}`
  ) => void;
  setBackgroundColor: (
    color: "bg_color" | "secondary_bg_color" | `#${string}`
  ) => void;
  showConfirm: (
    message: string,
    callback?: (confirmed: boolean) => void
  ) => void;
  showPopup: (params: PopupParams, callback?: (id?: string) => unknown) => void;
  showAlert: (message: string, callback?: () => unknown) => void;
  enableClosingConfirmation: VoidFunction;
  disableClosingConfirmation: VoidFunction;
  showScanQrPopup: (
    params: ScanQrPopupParams,
    callback?: (text: string) => void | true
  ) => void;
  closeScanQrPopup: () => void;
  readTextFromClipboard: (callback?: (text: string) => unknown) => void;
  ready: VoidFunction;
  switchInlineQuery: (
    query: string,
    chooseChatTypes?: Array<"users" | "bots" | "groups" | "channels">
  ) => void;
  requestWriteAccess: (callback?: (access: boolean) => unknown) => void;
  requestContact: (callback?: (access: boolean) => unknown) => void;
  BiometricManager: BiometricManager;
  isVerticalSwipesEnabled: boolean;
  enableVerticalSwipes: VoidFunction;
  disableVerticalSwipes: VoidFunction;
  shareToStory: (mediaURL: string, params?: ShareStoryParams) => void;
  bottomBarColor: string;
  setBottomBarColor: (bottomBarColor: string) => void;
  isActive: boolean;
  isFullscreen: boolean;
  isOrientationLocked: boolean;
  safeAreaInset: SafeAreaInset;
  contentSafeAreaInset: ContentSafeAreaInset;
  Accelerometer: Accelerometer;
  DeviceOrientation: DeviceOrientation;
  Gyroscope: Gyroscope;
  LocationManager: LocationManager;
  requestFullscreen: VoidFunction;
  exitFullscreen: VoidFunction;
  lockOrientation: VoidFunction;
  unlockOrientation: VoidFunction;
  addToHomeScreen: VoidFunction;
  checkHomeScreenStatus: (
    callback?: (status: HomeScreenStatus) => void
  ) => void;
  shareMessage: (msg_id: string, callback?: (isSent: boolean) => void) => void;
  setEmojiStatus: (
    custom_emoji_id: string,
    params?: EmojiStatusParams,
    callback?: (isSet: boolean) => void
  ) => void;
  requestEmojiStatusAccess: (callback?: (isGranted: boolean) => void) => void;
  downloadFile: (
    params: DownloadFileParams,
    callback?: (isAccepted: boolean) => void
  ) => void;
}

export interface Telegram {
  WebApp: WebApp;
}
