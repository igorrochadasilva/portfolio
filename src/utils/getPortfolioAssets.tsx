export const getPortfolioAssetSrc = (name: string, size: 'thumbnail' | 'modal' | 'large' = 'thumbnail') => {
  const path = `/src/assets/optimized/home-${name}-${size}.webp`
  const modules = import.meta.glob('/src/assets/optimized/*', { eager: true })
  const mod = modules[path] as { default: string }
  return mod?.default
}
