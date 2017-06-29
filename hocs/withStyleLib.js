// Module imports
import React from 'react';
import Head from 'next/head';


export default BaseComponent => props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Latest compiled and minified CSS */}
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
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
      {/*Latest compiled and minified JavaScript */}
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" />
      <script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>
    </Head>
    <BaseComponent {...props} />
  </div>
);
