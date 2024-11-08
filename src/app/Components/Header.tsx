import Link from 'next/link';
import './Header.css'; // Importing the CSS file

const Header = () => {
  return (
    <main>
      <h1>My Portfolio</h1>
      <div className="logo">
        <img src="me.jpg" alt="Logo" className="logoImage" />
      </div>

                   

      <nav>
        <ul className="navList">
          <li className="navItem">
            <Link href="/">Home</Link>
          </li>
          <li className="navItem">
            <Link href="/About">About</Link>
          </li>
          <li className="navItem">
            <Link href="/Contact">Contact</Link>
          </li>
          
   
          
        </ul>


      </nav>

      
    </main>
  );
};

export default Header;
