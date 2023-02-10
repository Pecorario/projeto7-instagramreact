import {
  IoPaperPlaneOutline,
  IoCompassOutline,
  IoHeartOutline,
  IoPersonOutline
} from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io';

export default function NavBar() {
  return (
    <header className="header-principal">
      <div className="header-content">
        <div className="logo-container">
          <IoLogoInstagram className="logo-instagram" />
          <div className="divider-column"></div>
          <img src="assets/logo.png" alt="" />
          <a href="/" className="mobile-message">
            <IoPaperPlaneOutline className="nav-icon" />
          </a>
        </div>

        <input type="text" placeholder="Pesquisar" />

        <nav className="buttons-container">
          <ul>
            <li>
              <a href="/">
                <IoPaperPlaneOutline className="nav-icon" />
              </a>
            </li>
            <li>
              <a href="/">
                <IoCompassOutline className="nav-icon" />
              </a>
            </li>
            <li>
              <a href="/">
                <IoHeartOutline className="nav-icon" />
              </a>
            </li>
            <li>
              <a href="/">
                <IoPersonOutline className="nav-icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
