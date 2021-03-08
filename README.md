# vue-tailwind-boilerplate

Boilerplate project for [Vue.js](https://vuejs.org/) and [Tailwind CSS](https://tailwindcss.com/) integration.

This is a fork of original [repository](https://github.com/ramigs/vue-tailwind-boilerplate), thanks [ramigs](https://github.com/ramigs). Dependencies were updated in this repository.

## Commands used to generate this boilerplate

Scaffolded project structure and development environment with command:

```
vue create vue-tailwind-boilerplate
```

Installed Tailwind CSS:

```
npm install tailwindcss
```

Imported Tailwind on `App.vue`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Created file `postcss.config.js` and added:

```js
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    }
}
```

Created file `tailwind.config.js` and added:

```js
// tailwind.config.js
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
```

## Compiles and hot-reloads for development
```
npm install -g @vue/cli-service-global
```
```
npm run serve
```
