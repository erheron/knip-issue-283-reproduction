# knip-issue-283-reproduction
Reproduction example for https://github.com/webpro/knip/issues/283


They mention in [knip]([https://github.com/webpro/knip](https://github.com/webpro/knip#default-configuration)) that one can write a `knip` configuration file in Typescript.
Let's do that! But also, what use is Typescript without types?

Clone the project, then run `yarn tsc` which runs a Typescript compiler. 
This should pass ✅

Then, in `knip.ts` remove `//` from the first and the last line, i.e. change this:

```ts
//import type { KnipConfig } from "knip"; 

...

}; // satisfies KnipConfig;

```

to this:

```ts
import type { KnipConfig } from "knip"; 

...

} satisfies KnipConfig;
```

Run `yarn tsc` again. Now it fails ❌

However, it is quite unexpected, since if that doesn't work, one cannot really use `knip` with Typescript 😔
