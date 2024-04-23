import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
const Navbar = ({ setLenguage, lenguage }) => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <button className={`w-10 ${lenguage == 'es'? 'underline text-2xl':'text-xl' }`} onClick={() => setLenguage('es')}>
              ES
            </button>
            <button className={`mx-2 w-10 ${lenguage == 'en'? 'underline text-2xl':'text-xl' }`} onClick={() => setLenguage('en')}>
              EN
            </button>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/edwin-rodriguez-garcia-7b717a16b" target="_blank">
            <FaLinkedin/>
          </a>
          <a href="https://github.com/Edwuardito" target="_blank">
            <FaGithub/>
          </a>
            {/* <FaInstagram />
            <FaSquareXTwitter/> */}
        </div>
    </nav>
  )
}

export default Navbar