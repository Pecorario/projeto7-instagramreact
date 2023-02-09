import Suggestions from '../Suggestions';
import User from '../User';

export default function SideBar() {
  const recommendations = [
    {
      name: 'camilacabello',
      text: 'Seguido(a) por talileoni e mais 46 pessoas',
      profilePicture: 'camila-cabello-foto.jpeg'
    },
    {
      name: 'luisasonza',
      text: 'Seguido(a) por talileoni e mais 46 pessoas',
      profilePicture: 'luisasonza-foto.jpg'
    },
    {
      name: 'ddlovato',
      text: 'Seguido(a) por marianesl e mais 46 pessoas',
      profilePicture: 'ddlovato-foto.jpg'
    },
    {
      name: 'mpecorario',
      text: 'Segue você',
      profilePicture: 'mayara-foto.jpg'
    },
    {
      name: 'davefernands',
      text: 'Novo no instagram',
      profilePicture: 'david-foto.jpg'
    }
  ];

  return (
    <aside class="sidebar">
      <User />

      <Suggestions recommendations={recommendations} />

      <div class="footer">
        <ul>
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Ajuda</a>
          </li>
          <li>
            <a href="/">Imprensa</a>
          </li>
          <li>
            <a href="/">API</a>
          </li>
          <li>
            <a href="/">Carreiras</a>
          </li>
          <li>
            <a href="/">Privacidade</a>
          </li>
          <li>
            <a href="/">Termos</a>
          </li>
          <li>
            <a href="/">Localizações</a>
          </li>
          <li>
            <a href="/">Contas mais relevantes</a>
          </li>
          <li>
            <a href="/">Hashtags</a>
          </li>
          <li>
            <a href="/">Idioma</a>
          </li>
        </ul>

        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </aside>
  );
}
