import Image, { type ImageProps } from "next/image"

interface SEOImageProps extends Omit<ImageProps, "alt"> {
  alt: string
  title?: string
}

export function SEOImage({ alt, title, ...props }: SEOImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      title={title || alt}
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
    />
  )
}

