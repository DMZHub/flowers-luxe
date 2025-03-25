import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

/**
 * The DEBUG flag will do two things:
 * 1. We will skip caching on the edge, which makes it easier to debug
 * 2. We will return an error message on exception in your Response
 */
const DEBUG = false

/**
 * Handle requests to the static site
 */
async function handleEvent(event) {
  const url = new URL(event.request.url)
  let options = {}

  try {
    if (DEBUG) {
      options.cacheControl = {
        bypassCache: true,
      }
    }
    
    /**
     * Handle static asset requests
     */
    const page = await getAssetFromKV(event, options)

    // Allow headers to be altered
    const response = new Response(page.body, page)

    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('Referrer-Policy', 'unsafe-url')
    response.headers.set('Feature-Policy', 'none')

    return response

  } catch (e) {
    // If an error occurs, return a 404 page
    return new Response(`Not found: ${url.pathname}`, {
      status: 404,
      statusText: 'Not Found',
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
}

/**
 * Main function
 */
addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})
