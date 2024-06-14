const finalizer = new FinalizationRegistry((func: () => void) => {
  func()
})

export type DisposeHolder<T> = {
  handle: T
}

export function holdDispose<T>(
  handle: T,
  dispose: ((h: T) => void) | null = null
): DisposeHolder<T> {
  const holder = {
    handle
  }
  finalizer.register(
    holder,
    () => {
      console.log('dispose')
      dispose?.(handle)
    },
    holder
  )
  return holder
}
