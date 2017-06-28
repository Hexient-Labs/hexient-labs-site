// Module imports
import React from 'react';
import Head from 'next/head';


export default BaseComponent => props => (
  <div>
    <Head>
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
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
      {/*Latest compiled and minified JavaScript */}
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" />
    </Head>
    <BaseComponent {...props} />
  </div>
);
