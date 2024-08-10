import { EnvironmentRef } from "./environment.ref";

/**
 * Dev - LocalServer
 */
export const environment: EnvironmentRef = {
  production: false,
  name: 'tomcat',
  api_base: 'http://localhost:8080/lalamiam-app/api',
  webapp_path: 'lalamiam'
};
