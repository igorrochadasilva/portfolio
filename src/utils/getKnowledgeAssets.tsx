export const getKnowledgeAssetSrc = (name: string) => {
  const path = `/src/assets/icon-${name}.svg`
  const modules = import.meta.glob('/src/assets/*', { eager: true })
  const mod = modules[path] as { default: string }
  return mod?.default
}
