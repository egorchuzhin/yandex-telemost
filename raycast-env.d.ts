/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Preferred Browser - Browser to open Telemost in. If not set, uses the currently active browser. */
  "browser"?: import("@raycast/api").Application
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `new-meeting` command */
  export type NewMeeting = ExtensionPreferences & {}
  /** Preferences accessible in the `new-meeting-refocus` command */
  export type NewMeetingRefocus = ExtensionPreferences & {}
  /** Preferences accessible in the `join-meeting` command */
  export type JoinMeeting = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `new-meeting` command */
  export type NewMeeting = {}
  /** Arguments passed to the `new-meeting-refocus` command */
  export type NewMeetingRefocus = {}
  /** Arguments passed to the `join-meeting` command */
  export type JoinMeeting = {}
}

