import Image, { type ImageProps } from "next/image"

interface SEOImageProps extends Omit<ImageProps, "alt"> {
  alt: string
  title?: string
}

const BLUR_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="

export function SEOImage({ alt, title, priority, ...props }: SEOImageProps) {
  // Next.js throws if both `priority` and `loading="lazy"` are present.
  // Priority images are fetched eagerly by the browser; lazy loading and
  // blur placeholders are only meaningful for below-the-fold images.
  if (priority) {
    return (
      <Image
        {...props}
        alt={alt}
        title={title || alt}
        priority
      />
    )
  }

  return (
    <Image
      {...props}
      alt={alt}
      title={title || alt}
      loading="lazy"
      placeholder="blur"
      blurDataURL={BLUR_PLACEHOLDER}
    />
  )
}
