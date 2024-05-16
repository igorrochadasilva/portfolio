import { AnimationOnScroll } from 'react-animation-on-scroll'
interface IKnowledgeProps {
  icon: string
  technology: string
}

const Knowledge: React.FC<IKnowledgeProps> = ({ icon, technology }) => {
  return (
    <div className="cardBox">
      <div className="cardBox__icon">
        <figure>
          <img src={icon} alt={technology} width="100px" height="100px" loading="lazy" />
        </figure>
      </div>
      <div className="cardBox__title">
        <p>{technology}</p>
      </div>
    </div>
  )
}

export default Knowledge
