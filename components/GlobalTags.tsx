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
      <link
        href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@100;300;400;500;700&display=swap"
        rel="stylesheet"
      >
      </link>

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
