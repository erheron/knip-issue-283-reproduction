//import type { KnipConfig } from "knip";

export default {
  workspaces: {
    ".": {
      entry: ["src/index.ts"],
      project: ["src/**"],
      ignore: [],
      ignoreDependencies: ["node_modules/**"],
    },
  },
  // see https://github.com/webpro/knip#reading-the-report
  include: ["exports", "types", "duplicateExports"],
  exclude: [
    "files",
    "dependencies",
    "devDependencies",
    "binaries", // TS should handle this
    "unresolved", // TS should handle this
    "nsExports", // this is weaker than "exports", and "exports" is included
    "nsTypes", // this is weaker than "types", and "types" is included
    "enumMembers",
    "classMembers",
  ],
}; // satisfies KnipConfig;
