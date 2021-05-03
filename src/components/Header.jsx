import StyleHeader from './StyleHeader';

export default function Header() {
  return (
    <StyleHeader>
      <div className="entete">
        <p>
          <div className="logo">
            <img src="/img/silhouette Hitchcock.png" alt="silouhette" />
          </div>
          <div className="titre">ALFRED HITCHCOCK</div>
        </p>
      </div>
      <nav className="menu">
        <ul>
          <li className="deroulant">
            <p>Biographie</p>
            <ul className="sous">
              <li>
                <p>Son enfance</p>
              </li>
              <li>
                <p>Ses débuts</p>
              </li>
              <li>
                <p>Ses périodes</p>
              </li>
              <li>
                <p>Sa méthode</p>
              </li>
              <li>
                <p>Ses récompenses</p>
              </li>
              <li>
                <p>Son influence</p>
              </li>
            </ul>
          </li>
          <li className="deroulant">
            <p>Filmographie</p>
            <ul className="sous">
              <li>
                <p>Période Anglaise</p>
              </li>
              <li>
                <p>Prériode Américaine</p>
              </li>
            </ul>
          </li>
          <li className="deroulant">
            <p>Caméos</p>
          </li>
          <li className="deroulant">
            <p>Alfred Hitchcock presents</p>
            <ul className="sous">
              <li>
                <p>Saison 1</p>
              </li>
              <li>
                <p>Saison 2</p>
              </li>
              <li>
                <p>Saison 3</p>
              </li>
              <li>
                <p>Saison 4</p>
              </li>
              <li>
                <p>Saison 5</p>
              </li>
              <li>
                <p>Saison 6</p>
              </li>
              <li>
                <p>Saison 7</p>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </StyleHeader>
  );
}
