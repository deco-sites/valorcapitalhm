import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />
      <title>Valor Capital Group | Driving Local Innovation</title>
      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`https://valorcapitalgroup.com/wp-content/themes/valor/static/favicon/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`https://valorcapitalgroup.com/wp-content/themes/valor/static/favicon/apple-touch-icon.png`}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={`https://valorcapitalgroup.com/wp-content/themes/valor/static/favicon/apple-touch-icon.png`}
      />
      <link
        rel="preload"
        type="text/css"
        href={asset("/GT-Eesti-Display-Bold.woff2")}
      />
      <link
        rel="preload"
        type="text/css"
        href={asset("/FreightTextProBook-Regular.woff2")}
      />
      <link
        rel="preload"
        type="text/css"
        href={asset("/BureauGrotCondensed-Book.woff2")}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: "gteesti";
            src:url(${asset("/GT-Eesti-Display-Bold.woff2")}) format("woff2");
            font-weight: normal;
            font-style: normal; 
            font-display: swap;
          }

          @font-face {
            font-family: "freight";
            src:url(${
            asset("/FreightTextProBook-Regular.woff2")
          }) format("woff2");
            font-weight: normal;
            font-style: normal; 
            font-display: swap;
          }
          @font-face {
            font-family: "bureal";
            src:url(${
            asset("/BureauGrotCondensed-Book.woff2")
          }) format("woff2");
            font-weight: normal;
            font-style: normal; 
            font-display: swap;
          }


          body: {
            font-family: teste;
            background: red;
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
      `,
        }}
      >
      </style>
    </Head>
  );
}

export default GlobalTags;
