# Stencil JS Vue Output Target Vue Issue

This is a small demo Project to reproduce the issue submitted [here](https://github.com/ionic-team/stencil-ds-output-targets/issues/233).

To run it, just make the script "demo.sh" in the root of this project executable and run it:

```bash
chmod +x demo.sh
bash ./demo.sh
```

This will install all dependencies and build everything.
At the end you will see the error Property 'modelValue' is missing in type..." as described in the [issue](https://github.com/ionic-team/stencil-ds-output-targets/issues/233).

## Fixing the problem

If you go into the file vue-target/dist/types/vue-component-lib/utils.d.ts and make the property modelValue optional like so:

```ts
export interface InputProps extends Object {
    modelValue?: string | boolean;
}
```

Then go into the directory vue-app an run npm run build again.
You will see, that the error is gone.