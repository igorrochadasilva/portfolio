// FONTAWESOME IMPORTS
import { IProject } from '.'
import { getPortfolioAssetSrc } from '../../utils/getPortfolioAssets'
import { iconSearch } from '../icons/Icons'

interface IImages {
  image: string
  text: string
  link: string
  handleModalData: ({ text, link, image }: IProject) => void
}

const BoxImage: React.FC<IImages> = ({ image, text, link, handleModalData }) => {
  return (
    <div
      className="portfolio-image-box"
      onClick={() =>
        handleModalData({
          text: text,
          link: link,
          image: image,
        })
      }
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes do projeto: ${text}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleModalData({
            text: text,
            link: link,
            image: image,
          })
        }
      }}
    >
      <figure>
        <img 
          className="portfolio-image" 
          src={getPortfolioAssetSrc(image)} 
          alt={`Screenshot do projeto ${text}`} 
          width="240px" 
          height="120px"
          loading="lazy"
        />

        <div className="overflow" aria-hidden="true"></div>
        <span className="sr-only">Visualizar projeto</span>
        {iconSearch}
      </figure>
    </div>
  )
}

export default BoxImage
