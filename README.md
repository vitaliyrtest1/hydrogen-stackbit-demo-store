# Hydrogen + Stackbit Demo Store

Hydrogen is a React framework and SDK that you can use to build fast and dynamic Shopify custom storefronts.

Journal contents coming from Contentful CMS and equipped with visual editing capabilities using Stackbit.

[Check out the Hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)

[Check out the Stackbit docs](https://docs.stackbit.com)

## Getting started

**Requirements:**

- Node.js version 16.5.0 or higher
- Yarn

To create a new Hydrogen app, run:

```bash
npm init @shopify/hydrogen
```

## Running the dev server

Then `cd` into the new directory and run:

```bash
npm install
npm run dev
```

Remember to update `hydrogen.config.js` with your shop's domain and Storefront API token!

## Building for production

```bash
npm run build
```

## Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Oxygen, build your Hydrogen app and then run `npm run preview`:

```bash
npm run build
npm run preview
```

## Importing Contentful Content

If you don't have a Contentful space set up and ready to go, you can import the starting content provided by this project.

1. Create a new Space in Contentful
1. Create new Contentful Personal Access Tokens [here](https://app.contentful.com/account/profile/cma_tokens/).
1. Import the Contentful data stored in the `contentful/export.json` file to the new space by running the following command. Replace the `<management_token>` with your Personal Access Token and the `<space_id>` with the new space ID.

   ```txt
   ./contentful/import.js <management_token> <space_id>
   ```

1. Create **Content Preview API - Access Token** for the new space via Contentful app **Settings** => **API Keys** => **Content delivery / preview tokens** => **Add API Key**. Add these keys to `.env` file(s) as mentioned above.

## Next Steps

Here are a few suggestions on what to do next if you're new to Stackbit:

- Learn [how Stackbit works](https://docs.stackbit.com/conceptual-guides/how-stackbit-works/)
- Follow the [_Getting Started_ tutorial](https://docs.stackbit.com/getting-started/)
- Explore the [how-to guides](https://docs.stackbit.com/how-to-guides/) for help while developing your site

## Other Stackbit Projects

Stackbit has a number of examples that you can use to create a new project or evaluate Stackbit. Run the following command to see a list of available examples:

```txt
npx create-stackbit-app@latest --help
```

You can also visit [our `stackbit-themes` GitHub organization](https://github.com/stackbit-themes)

## Join the Community

[Join us on Discord](https://discord.gg/HUNhjVkznH) for community support and to showcase what you build with this starter.