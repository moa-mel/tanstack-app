// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/_server': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../build/server/_server/server').default>>>>
    }
    '/': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../build/ssr/ssr').default>>>>
    }
  }
}
export {}