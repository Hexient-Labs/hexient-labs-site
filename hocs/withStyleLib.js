// Module imports
import React from 'react';
import Head from 'next/head';


export default BaseComponent => props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* START Favicons */}
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/static/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      {/* END Favicons */}

      {/* START External Stylesheets */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather+Sans"
        rel="stylesheet"
      />
      {/* END External Stylesheets */}

      {/* START Custom Stylesheets */}
      <link
        rel="stylesheet"
        href="../static/theme.min.css"
      />
      <link
        rel="stylesheet"
        href="../static/btn-primary-fix.css"
      />
      <link
        rel="stylesheet"
        href="../static/flex.css"
      />
      <link
        rel="stylesheet"
        href="../static/fonts.css"
      />
      <link
        rel="stylesheet"
        href="../static/spacing.css"
      />
      {/* END Custom Stylesheets */}

      {/* START External JS Files */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/cleave.js/0.7.21/cleave.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
      {/*Latest compiled and minified JavaScript */}
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" />
      <script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>
      {/* END External JS Files */}
    </Head>
    <BaseComponent {...props} />
  </div>
);
