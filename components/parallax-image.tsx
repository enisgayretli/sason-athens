'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type ParallaxImageProps = {
  src: string
  alt: string
  className?: string
  /** how far the image drifts, in px */
  strength?: number
  /** extra scale so the drift does not reveal the edges */
  zoom?: number
  fit?: 'cover' | 'contain'
  priority?: boolean
  sizes?: string
}

export function ParallaxImage({
  src,
  alt,
  className,
  strength = 60,
  zoom = 1.18,
  fit = 'cover',
  priority = false,
  sizes = '100vw',
}: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        const node = wrapRef.current
        if (node) {
          const rect = node.getBoundingClientRect()
          const progress =
            (rect.top + rect.height / 2 - window.innerHeight / 2) /
            window.innerHeight
          setOffset(progress * strength)
        }
        frame = 0
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [strength])

  return (
    <div ref={wrapRef} className={cn('relative overflow-hidden', className)}>
      <Image
        src={src || '/placeholder.svg'}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={fit === 'contain' ? 'object-contain' : 'object-cover'}
        style={{
          transform: `scale(${zoom}) translate3d(0, ${offset}px, 0)`,
          willChange: 'transform',
        }}
      />
    </div>
  )
}
