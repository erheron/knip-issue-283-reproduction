//import type { KnipConfig } from "knip";

export default {
  workspaces: {
    ".": {
      entry: ["src/App.tsx"],
      project: ["src/**"],
      ignore: [
        "**/__generated__",
        "**/__graphql__",
        "**/__devMocks__",
        "codegen.ts",
        "*.js,",
        "*.e2e.tsx",
      ],
      ignoreDependencies: ["node_modules/**"],
    },
  },
  // see https://github.com/webpro/knip#reading-the-report
  include: ["exports", "types", "duplicateExports"],
  exclude: [
    "files", // we do not care about empty files for now
    "dependencies", // TODO MOBILE-3891 maybe enable this later
    "devDependencies", // TODO MOBILE-3891 maybe enable this later
    "binaries", // TS should handle this
    "unresolved", // TS should handle this
    "nsExports", // this is weaker than "exports", and "exports" is included
    "nsTypes", // this is weaker than "types", and "types" is included
    "enumMembers", // TODO MOBILE-3891 maybe enable this later
    "classMembers", // TODO MOBILE-3891 maybe enable this later
  ],
}; // satisfies KnipConfig;
