// FONTAWESOME IMPORTS
import { IProject } from '.'
import { iconSearch } from '../icons/Icons'

import LazyLoad from 'react-lazyload'

interface IImages {
  image: string
  text: string
  link: string
  handleModalData: ({ text, link, image }: IProject) => void
}

const BoxImage: React.FC<IImages> = ({ image, text, link, handleModalData }) => (
  <div
    className="portfolio-image-box"
    onClick={() =>
      handleModalData({
        text: text,
        link: link,
        image: image,
      })
    }
  >
    <figure>
      <LazyLoad height={120}>
        <img className="portfolio-image" src={image} alt={text} width="240px" height="120px" />
      </LazyLoad>

      <div className="overflow"></div>
      {iconSearch}
    </figure>
  </div>
)

export default BoxImage
