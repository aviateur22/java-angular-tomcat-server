export interface EnvironmentRef {

  // si build en mode production
  production: boolean,

  // Nom de le config du build
  name: string,

  // Api base url
  api_base: string,

  // Language de l'ihm
  language: string,

   // main URL IHM
  webapp_path: string,

  // Main page title
  main_page_title: string
};
