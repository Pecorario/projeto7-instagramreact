import {
  IoPaperPlaneOutline,
  IoCompassOutline,
  IoHeartOutline,
  IoPersonOutline
} from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io';

export default function NavBar() {
  return (
    <header class="header-principal">
      <div class="header-content">
        <div class="logo-container">
          <IoLogoInstagram class="logo-instagram" />
          <div class="divider-column"></div>
          <img src="assets/logo.png" alt="" />
          <a href="/" class="mobile-message">
            <IoPaperPlaneOutline class="nav-icon" />
          </a>
        </div>

        <input type="text" placeholder="Pesquisar" />

        <nav class="buttons-container">
          <ul>
            <li>
              <a href="/">
                <IoPaperPlaneOutline class="nav-icon" />
              </a>
            </li>
            <li>
              <a href="/">
                <IoCompassOutline class="nav-icon" />
              </a>
            </li>
            <li>
              <a href="/">
                <IoHeartOutline class="nav-icon" />
              </a>
            </li>
            <li>
              <a href="/">
                <IoPersonOutline class="nav-icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
