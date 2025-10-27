import { getKnowledgeAssetSrc } from '../../utils/getKnowledgeAssets'

interface IKnowledgeProps {
  icon: string
  technology: string
  category: 'frontend' | 'backend' | 'cloud' | 'tools'
  level: 'advanced' | 'intermediate' | 'beginner'
}

const Knowledge: React.FC<IKnowledgeProps> = ({ icon, technology, category, level }) => {
  return (
    <div className="cardBox">
      <div className="cardBox__icon">
        <figure>
          <img 
            src={getKnowledgeAssetSrc(icon)} 
            alt={technology} 
            width="100px" 
            height="100px"
            loading="lazy"
          />
        </figure>
      </div>
      <div className="cardBox__title">
        <p>{technology}</p>
      </div>
    </div>
  )
}

export default Knowledge
