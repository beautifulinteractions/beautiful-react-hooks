import { MutableRefObject, useCallback, useRef } from 'react'
import { CallbackSetter } from './types'

type HandlerPair<T> = readonly [
  handler: MutableRefObject<T>,
  setHandler: CallbackSetter<T>,
]

/**
 * Returns an object where the first item is the [ref](https://reactjs.org/docs/hooks-reference.html#useref) to a
 * callback function and the second one is setter for that function.<br /><br />
 *
 * Although it function looks quite similar to the [useState](https://reactjs.org/docs/hooks-reference.html#usestate),
 * hook, in this case the setter just makes sure the given callback is indeed a new function.<br /><br />
 * **Setting a callback ref does not force your component to re-render.**<br /><br />
 *
 * `useHandlerSetter` is useful when abstracting other hooks to possibly implement handlers setters.
 */
const useHandlerSetterRef = <T extends (...args: any[]) => any>(handler?: T): HandlerPair<T> => {
  const handlerRef: MutableRefObject<T> = useRef(handler)

  const setHandler: CallbackSetter<T> = useCallback((nextCallback: T): void => {
    if (typeof nextCallback !== 'function') {
      throw new Error('the argument supplied to the \'setHandler\' function should be of type function')
    }

    handlerRef.current = nextCallback
  }, [handlerRef.current])

  return [handlerRef, setHandler]
}

export default useHandlerSetterRef
