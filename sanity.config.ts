import { defineConfig } from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas'

export const config = defineConfig({
  projectId: 'xkzu4s2r',
  dataset: 'production',
  title: 'Personal website sanity',
  apiVersion: '2023-08-04',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {types: schemas},
})