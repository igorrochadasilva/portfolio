import React, { useContext } from 'react'
import UserContext from '../context/AppContext'
import { ReactTyped } from 'react-typed'

const Home: React.FC = () => {
  const context = useContext(UserContext)
  const MHome = context.state.messages.Home

  return (
    <section id="home" className="home-wraper">
      <div className="main-info">
        <h1>
          <span>{MHome.title} </span>Igor Rocha.
        </h1>

        <ReactTyped
          className="typed-text"
          strings={[MHome.typedString1, MHome.typedString2, MHome.typedString3, MHome.typedString4]}
          typeSpeed={60}
          backSpeed={60}
          loop
        />
        <a className="btn-main-offer" href="#contacts">
          {MHome.button}
        </a>
      </div>
    </section>
  )
}

export default Home
