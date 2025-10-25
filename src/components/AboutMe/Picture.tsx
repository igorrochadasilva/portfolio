import iconMe from '../../assets/me.webp'

const Picture: React.FC = () => (
  <div className="col-lg-6 col-xm-12">
    <div className="photo-wrap mt-5">
      <figure>
        <img 
          className="profile-img" 
          src={iconMe} 
          alt="Igor Rocha" 
          width="256" 
          height="384" 
          loading="lazy" 
        />
      </figure>
    </div>
  </div>
)

export default Picture
