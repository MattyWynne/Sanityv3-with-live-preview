/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from 'sanity/cli'

const projectId = 'pjo47pxu'
const dataset = 'production'

export default defineCliConfig({ api: { projectId, dataset } })
// NEXT_PUBLIC_SANITY_PROJECT_ID = 'pjo47pxu'
// NEXT_PUBLIC_SANITY_DATASET = 'production'
