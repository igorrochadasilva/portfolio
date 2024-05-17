import { IProject } from '.'

interface IModal {
  imgSrc: string
  imgAlt: string
  projectTitle: string
  projectText: string
  link: string
  handleModalData: ({ text, link, image }: IProject) => void
}

const Modal = ({ imgSrc, imgAlt, projectText, link, projectTitle, handleModalData }: IModal) => {
  return (
    <div className="portfolio-modal">
      <div className="portfolio-modal-bg" onClick={() => handleModalData({ text: '', link: '', image: '' })}></div>
      <div className="portfolio-modal-body">
        <figure>
          <img className="portfolio-modal-body-image" src={imgSrc} alt={imgAlt} loading="lazy" />
        </figure>
        <div className="portfolio-modal-body-content">
          <p className="mt-2">
            <b>{projectTitle} </b>
            {projectText}
          </p>
          <p>
            <b>Link: </b>
            <a href="/" className="hyper-link" onClick={() => window.open(link)}>
              {link}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modal
