import { EnvironmentRef } from "./environment.ref";

/**
 * Prod
 */
export const environment: EnvironmentRef = {
  production: true,
  name: 'prod',
  language: 'fr',
  api_base: 'https://back-front-app-f51cda367db7.herokuapp.com/api',
  webapp_path: 'lalamiam',
  main_page_title: 'My APP'
};
