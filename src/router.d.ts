/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '404': RouteRecordInfo<'404', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    '/about': RouteRecordInfo<'/about', '/about', Record<never, never>, Record<never, never>>,
    '/home': RouteRecordInfo<'/home', '/home', Record<never, never>, Record<never, never>>,
    '/users/': RouteRecordInfo<'/users/', '/users', Record<never, never>, Record<never, never>>,
    '/users/[id]': RouteRecordInfo<'/users/[id]', '/users/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
  }
}
