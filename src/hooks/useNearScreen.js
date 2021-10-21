import { useEffect, useState, useRef } from 'react/cjs/react.development'

export default function useNearScreen({ distance = '100px' }) {
  let observer
  const [show, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(function () {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if(el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      } 
    }

    Promise.resolve(
      typeof IntersectionObserver === 'undefined'
      ? IntersectionObserver
      : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })
      observer.observe(fromRef.current)
    })

    return () => observer && observer.disconnect()
  })

  return {show, fromRef}
}