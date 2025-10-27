import { useContext, useState, useMemo } from 'react'

import Knowledge from './Knowledge'

import { UserContext } from '../context/AppContext'

interface IKnowledge {
  text: string
  image: string
  category: 'frontend' | 'backend' | 'cloud' | 'tools'
  level: 'advanced' | 'intermediate' | 'beginner'
}

interface ICategories {
  all: string
  frontend: string
  backend: string
  cloud: string
  tools: string
}

const Knowledges: React.FC = () => {
  const context = useContext(UserContext)
  const { title, list, categories } = context.state.messages.Knowledges

  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Filtrar tecnologias baseado na categoria selecionada
  const filteredKnowledges = useMemo(() => {
    if (selectedCategory === 'all') {
      return list as IKnowledge[]
    }
    return (list as IKnowledge[]).filter((knowledge) => knowledge.category === selectedCategory)
  }, [list, selectedCategory])

  return (
    <section id="knowledge" className="knowledge">
      <h1>
        {title} <span className="dot">.</span>
      </h1>

      <div className="container">
        {/* Filtros de Categoria */}
        <div className="knowledge-filters">
          {Object.entries(categories as ICategories).map(([key, label]: [string, string]) => (
            <button
              key={key}
              className={`filter-btn ${selectedCategory === key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(key)}
              aria-label={`Filtrar por ${label}`}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid de Tecnologias */}
        <div className="row justify-content-center cards">
          {filteredKnowledges.map((knowledge: IKnowledge, index: number) => (
            <Knowledge 
              key={`knowledge-${selectedCategory}-${index}-${knowledge.text}`} 
              icon={knowledge.image} 
              technology={knowledge.text}
              category={knowledge.category}
              level={knowledge.level}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Knowledges
