import shop1 from '../assets/images/Instagram-Shop-1.webp'
import shop2 from '../assets/images/Instagram-Shop-2.webp'
import shop3 from '../assets/images/Instagram-Shop-3.webp'
import shop4 from '../assets/images/Instagram-Shop-4.webp'

const shopImages = [
  { src: shop1, alt: 'Instagram Shop image 1' },
  { src: shop2, alt: 'Instagram Shop image 2' },
  { src: shop3, alt: 'Instagram Shop image 3' },
  { src: shop4, alt: 'Instagram Shop image 4' },
]

export default function Footer() {
  return (
    <footer>
      <div className="text">
        <span>Beauty Care</span>
        <p>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <span>Follow Us</span>
      </div>
      <div>
        <span>Instagram Shop</span>
        <div className="instagram-shop-images">
          {shopImages.map(({ src, alt }) => (
            <img key={alt} src={src} alt={alt} />
          ))}
        </div>
      </div>
    </footer>
  )
}
