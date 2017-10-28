'use strict'

import test from 'ava'
import m from '.'

test(t => {
  const result = m({
    app_id: '145634995501895',
    redirect_uri: 'https://bukinoshita.io',
    href: 'https://bukinoshita.io',
    quote: 'Sharing with FB'
  })

  t.true(result.includes('app_id=145634995501895'))
  t.true(result.includes('redirect_uri=https://bukinoshita.io'))
  t.true(result.includes('href=https://bukinoshita.io'))
  t.true(result.includes('quote=Sharing%20with%20FB'))
})
