'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  /**
   * Whether to show a blur placeholder while loading
   * @default true
   */
  showBlurPlaceholder?: boolean;
  /**
   * Custom blur data URL (base64 encoded image)
   * If not provided, uses Next.js automatic blur placeholder
   */
  customBlurDataURL?: string;
}

/**
 * OptimizedImage component that wraps Next.js Image with:
 * - Automatic blur placeholders for better perceived performance
 * - Lazy loading by default
 * - Optimized formats (AVIF, WebP)
 * - Error handling with fallback
 */
export function OptimizedImage({
  showBlurPlaceholder = true,
  customBlurDataURL,
  alt,
  onError,
  ...props
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = (error: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(error);
  };

  // If image failed to load, show fallback
  if (hasError) {
    return (
      <div
        className="flex items-center justify-center bg-gray-200 text-gray-500"
        style={{
          width: props.width || '100%',
          height: props.height || '100%',
        }}
        role="img"
        aria-label={alt}
      >
        <span className="text-sm">Image unavailable</span>
      </div>
    );
  }

  const imageProps: ImageProps = {
    ...props,
    alt,
    onError: handleError,
    loading: props.loading || 'lazy',
  };

  // Add blur placeholder if enabled
  if (showBlurPlaceholder) {
    if (customBlurDataURL) {
      imageProps.placeholder = 'blur';
      imageProps.blurDataURL = customBlurDataURL;
    } else if (typeof props.src === 'string' && props.src.startsWith('/')) {
      // For local images, Next.js can generate blur placeholder automatically
      // This requires the image to be imported statically or use a blur data URL
      imageProps.placeholder = 'blur';
      imageProps.blurDataURL = generateSimpleBlurDataURL();
    }
  }

  return <Image {...imageProps} />;
}

/**
 * Generates a simple gray blur data URL as fallback
 * This is a minimal 1x1 pixel gray image in base64
 */
function generateSimpleBlurDataURL(): string {
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=';
}
