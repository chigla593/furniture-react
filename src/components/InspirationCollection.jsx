import img1 from '../assets/images/inspration-collection-img1.webp'
import img2 from '../assets/images/inspration-collection-img2.webp'
import img3 from '../assets/images/inspration-collection-img3.webp'

export default function InspirationCollection() {
  return (
    <section className="Inspiration-Collection">
      <div>
        <h2>Inspiration Collection</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="Inspiration-Collection-images">
        <img className="image1" src={img1} alt="inspiration collection image number one" />
        <img className="image2" src={img2} alt="inspiration collection image number two" />
        <img className="image3" src={img3} alt="inspiration collection image number three" />
      </div>
    </section>
  )
}
