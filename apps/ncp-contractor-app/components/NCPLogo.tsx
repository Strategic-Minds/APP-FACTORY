'use client'

import Image from 'next/image'

type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

const SIZES: Record<LogoSize, { width: number; height: number }> = {
  xs:   { width: 32,  height: 28  },
  sm:   { width: 44,  height: 38  },
  md:   { width: 64,  height: 55  },
  lg:   { width: 96,  height: 83  },
  xl:   { width: 128, height: 110 },
  full: { width: 192, height: 165 },
}

interface NCPLogoProps {
  size?: LogoSize
  className?: string
  priority?: boolean
}

export function NCPLogo({ size = 'md', className = '', priority = false }: NCPLogoProps) {
  const { width, height } = SIZES[size]
  return (
    <Image
      src="/brand/ncp-logo-master.png"
      alt="National Concrete Polishing — NCP"
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}
