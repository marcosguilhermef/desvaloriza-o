<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Desvalorização é uma ferramenta criada para mostrar a perda do poder de compra do real nos últimos anos e como isso afeta diretamente na vida dos brasileiros." />
    <meta name="facebook-domain-verification" content="dz0rtvkf5s20ww9d9g1m8j960kp7bv" />
    <meta property="og:url"            content="http://desvalorizacao.com/" />
    <meta property="og:type"           content="site" />
    <meta property="og:title"          content="Quando o seu dinheiro se desvalorizou nos últimos anos? " />
    <meta property="og:description"    content="Essa ferramenta tem o objetico de demonstrar o tanto que o seu dinheiro se desvalorizou nos últimos anos." />
    <meta property="og:image"          content="http://desvalorizacao.com/public/android-chrome-512x512.png" />

    <link rel="icon" href="{{ asset('image/navegador.png') }}" />
    <link rel="apple-touch-icon" href="{{ asset('image/apple-touch-icon.png') }}" />
    <link rel="shortcut icon" href="{{ asset('image/favicon.ico') }}" >

    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="./manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>Desvalorização</title>
    <script src="{{ asset('js/react.js') }}" defer></script>

  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
