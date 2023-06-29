'use client'
import { definePreview } from 'next-sanity/preview'
import { dataset, projectId } from '../../sanity/env'

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`)
}

if (!projectId || !dataset) {
  throw new Error(
    `The environment variables NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET are missing. Check your environment.`
  )
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
})
