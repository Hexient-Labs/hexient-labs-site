// Module imports
import React from 'react';

import design from '../../constants/design';

export default () => (
	<div className="container-fluid wrapper wrapper-overlay">
		<div className="container-fluid margin-top-5pct">
			<div className="col-md-8 col-md-offset-2 text-center">
				<a href="https://medium.com/hexient-labs" rel="noopener noreferrer" target="_blank">
					<h1 className="margin-top-5pct margin-bottom-10pct scroll-reveal">
						We love software so much that we blog about it.
					</h1>
				</a>
			</div>
		</div>
		<style jsx>{`
      .wrapper {
      	background-image: url('../../static/Office-Image.png');
      	background-size: cover;
      }
      .wrapper-overlay {
      	background-color: rgba(0, 0, 0, 0.95);
      }
      h1 {
        color: ${design.colors.white};
        font-family: "Helvetica Nueue", Helvetica, Arial;
        font-weight: bold;
      }
      a:hover, a:visited {
        color: ${design.colors.white};
      }
    `}</style>
	</div>
);
