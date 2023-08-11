import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon-16x16.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon-32x32.png")}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />

      <style>
        {`
          @font-face {
            font-family: 'GT-Eesti-Display-Bold';
            src: url(${
          asset("static/fonts/GT-Eesti-Display-Bold.woff2")
        }) format('woff2'),
            font-weight: bold;
            font-style: normal;
          }
          body {
            font-family: 'GT-Eesti-Display-Bold';
          }
          mark {
            background: linear-gradient(225deg,#48d0ff,#e4ff49) no-repeat;
            padding: 0 0.6875rem;
          }

          .fade-in {
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
          }
          
          .fade-out {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
          }
          
          `}
      </style>
    </Head>
  );
}

export default GlobalTags;
