import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import type { TypedOptions } from 'typed.js';

export const useTyped = (strings: string[], options?: TypedOptions) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      typedRef.current = new Typed(elementRef.current, {
        strings,
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        ...options,
      });
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [strings, options]);

  return elementRef;
};