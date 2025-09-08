import { createUnplugin } from "unplugin"
import { name } from "./meta"

export interface UnpluginDeclareOptions {}

const unplugin = createUnplugin((options: Readonly<UnpluginDeclareOptions>) => {
  return { name }
})

export default unplugin
export const vite = unplugin.vite
export const rollup = unplugin.rollup
export const rolldown = unplugin.rolldown
export const webpack = unplugin.webpack
export const rspack = unplugin.rspack
export const esbuild = unplugin.esbuild
export const farm = unplugin.farm
