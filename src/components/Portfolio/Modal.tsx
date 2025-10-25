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
  const handleClose = () => {
    handleModalData({ text: '', link: '', image: '' })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      handleClose()
    }
  }

  return (
    <div 
      className="portfolio-modal" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-title" 
      aria-describedby="modal-description"
      onKeyDown={handleKeyDown}
    >
      <div 
        className="portfolio-modal-bg" 
        onClick={handleClose}
        aria-label="Fechar modal"
      ></div>
      
      <div className="portfolio-modal-body">
        {/* Close Button */}
        <button 
          className="modal-close-btn"
          onClick={handleClose}
          aria-label="Fechar modal"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <figure>
          <img 
            className="portfolio-modal-body-image" 
            src={imgSrc} 
            alt={imgAlt} 
            loading="lazy"
          />
        </figure>
        
        <div className="portfolio-modal-body-content">
          <h3 id="modal-title">{projectTitle}</h3>
          <p id="modal-description">
            {projectText}
          </p>
          <p>
            <a 
              href={link} 
              className="hyper-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Visitar ${projectText} (abre em nova aba)`}
            >
              Visitar Projeto →
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modal
