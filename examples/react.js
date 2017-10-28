'use strict'

import shareFacebook from 'share-facebook'

export default = ({ redirect_uri, url, app_id }) => <a href={shareFacebook({ redirect_uri, url, app_id })}>Share on Facebook</a>
