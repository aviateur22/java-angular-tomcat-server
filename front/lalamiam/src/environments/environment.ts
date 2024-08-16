import { EnvironmentRef } from "./environment.ref";

/**
 * Fichier environment par default
 */
export const environment: EnvironmentRef = {
  production: false,
  api_base: 'http://localhost:8080/api',
  name: 'env',
  language: "fr",
  webapp_path: "webapp",
 main_page_title: 'My APP'
};
