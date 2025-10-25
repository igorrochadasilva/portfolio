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
    <div className="portfolio-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
      <div 
        className="portfolio-modal-bg" 
        onClick={() => handleModalData({ text: '', link: '', image: '' })}
        aria-label="Fechar modal"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleModalData({ text: '', link: '', image: '' })
          }
        }}
      ></div>
      <div className="portfolio-modal-body">
        <figure>
          <img 
            className="portfolio-modal-body-image" 
            src={imgSrc} 
            alt={imgAlt} 
            loading="lazy"
            width="400"
            height="300"
          />
        </figure>
        <div className="portfolio-modal-body-content">
          <h3 id="modal-title">{projectTitle}</h3>
          <p id="modal-description">
            {projectText}
          </p>
          <p>
            <strong>Link: </strong>
            <a 
              href={link} 
              className="hyper-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Visitar ${projectText} (abre em nova aba)`}
            >
              {link}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modal
