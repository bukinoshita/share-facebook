// Packages
import test from 'ava'

// Root
import m from '.'

test('it should create facebook share url', t => {
  const result = m({
    app_id: '145634995501895',
    redirect_uri: 'https://bukinoshita.io',
    href: 'https://bukinoshita.io',
    quote: 'Sharing with FB',
    hashtags: 'facebook',
    mobile_iframe: true
  })

  t.true(result.includes('app_id=145634995501895'))
  t.true(result.includes('redirect_uri=https://bukinoshita.io'))
  t.true(result.includes('href=https://bukinoshita.io'))
  t.true(result.includes('quote=Sharing%20with%20FB'))
  t.true(result.includes('hashtag=facebook'))
  t.true(result.includes('mobile_iframe=true'))
})

test('it should throw error', t => {
  const error = t.throws(() => m())

  t.is(error.message, '`app_id` is required')
})

test('it should not include redirect_uri', t => {
  const result = m({
    app_id: '145634995501895',
    href: 'https://bukinoshita.io',
    quote: 'Sharing with FB'
  })

  t.true(result.includes('app_id=145634995501895'))
  t.false(result.includes('redirect_uri'))
  t.true(result.includes('href=https://bukinoshita.io'))
  t.true(result.includes('quote=Sharing%20with%20FB'))
})

test('it should not include href', t => {
  const result = m({
    app_id: '145634995501895',
    redirect_uri: 'https://bukinoshita.io',
    quote: 'Sharing with FB'
  })

  t.true(result.includes('app_id=145634995501895'))
  t.true(result.includes('redirect_uri=https://bukinoshita.io'))
  t.false(result.includes('href'))
  t.true(result.includes('quote=Sharing%20with%20FB'))
})

test('it should not include quote', t => {
  const result = m({
    app_id: '145634995501895',
    redirect_uri: 'https://bukinoshita.io',
    href: 'https://bukinoshita.io'
  })

  t.true(result.includes('app_id=145634995501895'))
  t.true(result.includes('redirect_uri=https://bukinoshita.io'))
  t.true(result.includes('href=https://bukinoshita.io'))
  t.false(result.includes('quote=Sharing%20with%20FB'))
})
