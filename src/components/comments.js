import React from 'react';
import { Helmet } from 'react-helmet';

const Comments = () => (
  <>
    <div id="commento" />
    <Helmet>
      <script defer src="https://cdn.commento.io/js/commento.js" />
    </Helmet>
  </>
);

export default Comments;
