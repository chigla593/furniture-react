import freeDeliveryIcon from '../assets/images/truck.svg'
import supportIcon from '../assets/images/time.svg'
import authenticityIcon from '../assets/images/shield-1 1.png'

const items = [
  { icon: freeDeliveryIcon, title: 'Free Delivery', text: 'Lorem ipsum dolor sit amet.', gap: false },
  { icon: supportIcon, title: 'Support 24/7', text: 'Lorem ipsum dolor sit amet.', gap: true },
  { icon: authenticityIcon, title: '100% Authentic', text: 'Lorem ipsum dolor sit amet.', gap: true },
]

export default function HeaderInfo() {
  return (
    <div className="headerinfo">
      <div>
        {items.map(({ icon, title, text, gap }) => (
          <div className={gap ? 'gap' : undefined} key={title}>
            <img src={icon} alt="" />
            <div className="test">
              <p>{title}</p>
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
