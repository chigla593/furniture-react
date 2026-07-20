import purchaseImg from '../assets/images/Purchase-Securely-img.webp'
import shipsImg from '../assets/images/Ships-From-Warehouse-img.webp'
import styleImg from '../assets/images/Style-Your-Room-img.webp'

const steps = [
  {
    img: purchaseImg,
    alt: 'purchase securely image',
    title: 'Purchase Securely',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: shipsImg,
    alt: 'ships from warehouse image',
    title: 'Ships From Warehouse',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: styleImg,
    alt: 'style your room image',
    title: 'Style Your Room',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

export default function HowItWorks() {
  return (
    <section className="How-It-Works">
      <div>
        <h2>How It Works</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="How-It-Works-Images">
        {steps.map(({ img, alt, title, text }) => (
          <div key={title}>
            <img src={img} alt={alt} />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
