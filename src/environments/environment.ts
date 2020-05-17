// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const webSocketPrefix = "ws://";
const baseUrl = "/api";
// export const baseUrl = "http://localhost:8000/api";

export const environment = {
  production: false,
  baseUrl: baseUrl,
  userUrl: `${baseUrl}/user`,
  conversationsUrl: `${baseUrl}/conversations`,
  messages: `${baseUrl}/messages`,
  wsUrl: webSocketPrefix,
};
