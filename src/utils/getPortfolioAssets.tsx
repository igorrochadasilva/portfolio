export const getPortfolioAssetSrc = (name: string) => {
  const path = `/src/assets/home-${name}.webp`
  const modules = import.meta.glob('/src/assets/*', { eager: true })
  const mod = modules[path] as { default: string }
  return mod?.default
}
