import diningImg from '../assets/images/DIning-img.webp'
import livingImg from '../assets/images/Living-img.webp'
import bedroomImg from '../assets/images/Bedroom-img.webp'

const items = [
  { img: diningImg, alt: 'dining room image', label: 'Dining' },
  { img: livingImg, alt: 'living room image', label: 'Living' },
  { img: bedroomImg, alt: 'bedroom image', label: 'Bedroom' },
]

export default function BrowseTheRange() {
  return (
    <section className="Browse-The-Range">
      <div>
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="Browse-The-Range-images">
        {items.map(({ img, alt, label }) => (
          <div key={label}>
            <img src={img} alt={alt} />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
