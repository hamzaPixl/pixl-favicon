# Create Tailwind CSS Boilerplate

A bare-bones Tailwind CSS boilerplate.

It creates a simple React template with [Tailwind CSS][tailwind] support,
served by [Flowbite][flowbite] and using [Nextjs][nextjs] as framework.

## Getting started

### Requirements

[Yarn][yarn] is suggested, but not required. The project will be set up with
[npm][npm] if Yarn is not found.

### Create boilerplate

```bash
yarn create nextjs-tailwind-boilerplate

# or

npx create-nextjs-tailwind-boilerplate
```

Follow instructions at the prompt to create your project:

```bash
? Name your project root directory my-project
  ✔ Create directory structure
  ✔ Create project files
  ✔ Create templates
  ✔ Set up dependencies
```

### Run server

```bash
yarn dev
```

Open your favorite text editor and start coding!

## Build for production

```bash
yarn build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.js`. The page auto-updates as you edit the file.

You can start editing the json configuration by modifying `src/pages/injected.json`. The page auto-updates as you edit the file.

Build files will end up in `/dist`.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository={{injected.settings.repository.url}}&utm_source=github&utm_medium={{injected.settings.repository.name}}&utm_campaign=devex-cs)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?s={{injected.settings.repository.url}}&hasTrialAvailable=1&showOptionalTeamCreation=false&project-name={{injected.settings.repository.name}}&framework=nextjs&totalProjects=1&remainingProjects=1)

[tailwind]: https://tailwindcss.com
[nextjs]: https://parceljs.org
[flowbite]: https://flowbite.com/
[yarn]: https://yarnpkg.com
[npm]: https://www.npmjs.com

## todos

[] add script
[] check intl usage
