import { EnvironmentRef } from "./environment.ref";

/**
 * Dev - LocalServer
 */
export const environment: EnvironmentRef = {
  production: false,
  name: 'dev',
  language: 'fr',
  api_base: 'http://localhost:8080/api',
  webapp_path: 'webapp'
};
