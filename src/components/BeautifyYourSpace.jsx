import spaceImg from '../assets/images/Beautify-Your-Space-img.webp'
import decoImg from '../assets/images/green-half-circle.webp'

export default function BeautifyYourSpace() {
  return (
    <section className="Beautify-Your-Space">
      <div className="left">
        <h2>Beautify Your Space</h2>
        <p>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <button>LEARN MORE</button>
      </div>
      <div className="right">
        <img src={spaceImg} alt="girl looking to the side" />
        <img className="deco" src={decoImg} alt="green elipse behind the girl" />
      </div>
    </section>
  )
}
