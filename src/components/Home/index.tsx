import React, { useContext } from 'react'
import { UserContext } from '../context/AppContext'
import { ReactTyped } from 'react-typed'

const Home: React.FC = () => {
  const context = useContext(UserContext)
  const MHome = context.state.messages.Home

  return (
    <section id="home" className="home-wraper" role="main" aria-labelledby="home-title">
      <div className="main-info">
        <h1 id="home-title">
          <span>{MHome.title} </span>Igor Rocha.
        </h1>
        {MHome ? (
          <ReactTyped
            className="typed-text"
            strings={[MHome.typedString1, MHome.typedString2, MHome.typedString3]}
            typeSpeed={60}
            backSpeed={60}
            loop
            aria-label="Especialidades: Desenvolvedor FullStack, Desenvolvedor VTEX, Desenvolvedor React"
          />
        ) : null}

        <a className="btn-main-offer" href="#contacts" aria-label="Ir para seção de contato">
          {MHome.button}
        </a>
      </div>
    </section>
  )
}

export default Home
