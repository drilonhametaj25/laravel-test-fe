// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

export interface ApiConfig {
  protocol: string;
  domain: string;
  port: number;
  basePath: string;
  fullPath: string | null;
  path: string | null;
  feUrl: string;
}

export interface I18nConfig {
  defaultLocale: string;
  availableLocales: Array<string>;
}

export interface Config {
  api: ApiConfig;
  i18n?: I18nConfig;
  resources: ResourcesConfig;
}
export interface ResourcesConfig {
  basePath: string;
}
export let config: Config;

// config = {
//   api: {
//     domain: 'api.imprese2030.it',
//     port: 443,

//     /** COMMON **/
//     protocol: 'https',
//     basePath: '/api/v1',
//     fullPath: null,
//     path: null,
//     feUrl: 'https://imprese2030.it',
//   },
//   resources: {
//     basePath: 'http://localhost:3000',
//   }
// }
config = {
  api: {
    domain: 'localhost',
    port: 8000,

    /** COMMON **/
    protocol: '',
    basePath: '/api',
    fullPath: null,
    path: null,
    feUrl: 'http://localhost:4200',
  },
  resources: {
    basePath: 'http://localhost:8000/api',
  }
};

config.i18n = {
  defaultLocale: 'it',
  availableLocales: ['it'],
};

const { protocol, domain, port, basePath } = config.api;

const getBasePath = () => (basePath[0] === '/' ? basePath : '' + basePath)
if (port === 80 || port === 443) {
  config.api.path = `${protocol ? protocol + '://' : '//'}${domain}`
  config.api.fullPath = `${protocol ? protocol + '://' : '//'}${domain}${getBasePath()}`
} else {
  config.api.path = `${protocol ? protocol + '://' : '//'}${domain}:${port}`
  config.api.fullPath = `${protocol ? protocol + '://' : '//'}${domain}:${port}${getBasePath()}`
}

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
