export interface BuildPaths {
  entry: string;
  output: string;
  pathHtml: string;
  pathPublic: string;
  rootPath: string;
}

export interface BuildMode {
  isDevelopment: boolean;
  isProduction: boolean;
}

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer: boolean;
}
