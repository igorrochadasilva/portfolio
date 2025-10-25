import { useContext, useState } from 'react'

import { AnimationOnScroll } from 'react-animation-on-scroll'

import BoxImage from './BoxImage'
import { UserContext } from '../context/AppContext'
import Modal from './Modal'

export interface IProject {
  text: string
  link: string
  image: string
}

const Portfolio = () => {
  const context = useContext(UserContext)
  const MPortfolios = context.state.messages.Portfolios
  const { projects, project } = MPortfolios

  const [modalData, setModalData] = useState<IProject>({
    text: '',
    link: '',
    image: '',
  })
  const [showModal, setShowModal] = useState(false)

  const handleModalData = (projectData: IProject) => {
    setModalData(projectData)
    setShowModal(!showModal)
  }

  return (
    <section id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-center py-5">
          {MPortfolios.title} <span className="dot">.</span>
        </h1>
        <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
          <div className="image-box-wrapper row">
            {projects.map((project: IProject, index: number) => {
              return (
                <BoxImage
                  text={project.text}
                  image={project.image}
                  link={project.link}
                  handleModalData={handleModalData}
                  key={`project-${index}-${project.image}`}
                />
              )
            })}
          </div>
        </AnimationOnScroll>
      </div>
      {showModal ? (
        <Modal
          imgAlt={modalData.text}
          imgSrc={modalData.image}
          link={modalData.link}
          projectText={modalData.text}
          projectTitle={project}
          handleModalData={handleModalData}
        />
      ) : null}
    </section>
  )
}

export default Portfolio
