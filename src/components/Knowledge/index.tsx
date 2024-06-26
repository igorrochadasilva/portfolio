import { v4 as uuidv4 } from 'uuid'
import { useContext } from 'react'

import Knowledge from './Knowledge'

import { UserContext } from '../context/AppContext'

const Knowledges: React.FC = () => {
  const context = useContext(UserContext)
  const { title, list } = context.state.messages.Knowledges

  return (
    <section id="knowledge" className="knowledge">
      <h1>
        {title} <span className="dot">.</span>
      </h1>

      <div className="container">
        <div className="row justify-content-center cards">
          {list.map((knowledge: { text: string; image: string }) => (
            <Knowledge key={uuidv4()} icon={knowledge.image} technology={knowledge.text} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Knowledges
