import Posts from '../Posts';
import SideBar from '../SideBar';
import Stories from '../Stories';

export default function Body() {
  const accounts = [
    {
      name: 'taynarapecorario',
      profilePicture: 'taynara-foto.jpeg'
    },
    {
      name: 'talileoni',
      profilePicture: 'talileoni-foto.jpeg'
    },
    {
      name: 'nai.morante',
      profilePicture: 'naiara-foto.jpg'
    },
    {
      name: 'marianesl',
      profilePicture: 'marianesl-foto.jpg'
    },
    {
      name: 'joao_boscoo_',
      profilePicture: 'joao-foto.jpg'
    },
    {
      name: 'raulriato',
      profilePicture: 'raulriato-foto.jpg'
    },
    {
      name: 'aninha_miyamotto',
      profilePicture: 'ana-foto.jpg'
    },
    {
      name: 'nathvilalta',
      profilePicture: 'nathvilalta-foto.jpg'
    },
    {
      name: 'penguinisa',
      profilePicture: 'penguinisa-foto.jpg'
    },
    {
      name: 'monalaris',
      profilePicture: 'monalaris-foto.jpg'
    },
    {
      name: 'aline.moro_',
      profilePicture: 'aline-foto.jpg'
    },
    {
      name: 'amandamusambani',
      profilePicture: 'amandamusambani-foto.jpg'
    },
    {
      name: 'g.reiss_',
      profilePicture: 'gabriel-foto.jpg'
    },
    {
      name: 'rafarebe',
      profilePicture: 'rafarebe-foto.jpg'
    },
    {
      name: 'femafra99',
      profilePicture: 'femafra99-foto.jpg'
    },
    {
      name: 'alves.arian',
      profilePicture: 'arian-foto.jpg'
    }
  ];

  const dataPosts = [
    {
      fromProfilePicture: 'taynara-foto.jpeg',
      from: 'taynarapecorario',
      urlPostImage: 'feed-talileoni.jpeg',
      likedBy: 'talileoni',
      likedByProfilePicture: 'talileoni-foto.jpeg'
    },
    {
      fromProfilePicture: 'taynara-foto.jpeg',
      from: 'taynarapecorario',
      urlPostImage: 'feed-mingau-01.jpeg',
      likedBy: 'talileoni',
      likedByProfilePicture: 'talileoni-foto.jpeg'
    },
    {
      fromProfilePicture: 'taynara-foto.jpeg',
      from: 'taynarapecorario',
      urlPostImage: 'feed-mingau-02.jpeg',
      likedBy: 'talileoni',
      likedByProfilePicture: 'talileoni-foto.jpeg'
    },
    {
      fromProfilePicture: 'taynara-foto.jpeg',
      from: 'taynarapecorario',
      urlPostImage: 'feed-mingau-03.jpeg',
      likedBy: 'talileoni',
      likedByProfilePicture: 'talileoni-foto.jpeg'
    },
    {
      fromProfilePicture: 'taynara-foto.jpeg',
      from: 'taynarapecorario',
      urlPostImage: 'feed-mingau-04.jpeg',
      likedBy: 'talileoni',
      likedByProfilePicture: 'talileoni-foto.jpeg'
    },
    {
      fromProfilePicture: 'talileoni-foto.jpeg',
      from: 'talileoni',
      urlPostImage: 'feed-mingau-05.jpeg',
      likedBy: 'taynarapecorario',
      likedByProfilePicture: 'taynara-foto.jpeg'
    },
    {
      fromProfilePicture: 'talileoni-foto.jpeg',
      from: 'talileoni',
      urlPostImage: 'feed-mingau-06.jpeg',
      likedBy: 'taynarapecorario',
      likedByProfilePicture: 'taynara-foto.jpeg'
    }
  ];

  return (
    <div class="content">
      <main>
        <Stories accounts={accounts} />
        <Posts data={dataPosts} />
      </main>

      <SideBar />
    </div>
  );
}
