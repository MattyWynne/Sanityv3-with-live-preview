import { createClient, groq } from 'next-sanity'
import { cache } from 'react'
import { apiVersion, dataset, projectId, useCdn } from '../../sanity/env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

// Wrap the cache function in a way that reuses the TypeScript definitions
const clientFetch = cache(client.fetch.bind(client))

// Now use it just like before, fully deduped, cached and optimized by react
const data = await clientFetch(groq`*[]`)
// You can use the same generics as before
const total = await clientFetch(groq`count(*)`)
