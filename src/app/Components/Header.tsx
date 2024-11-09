import Link from 'next/link';
import './Header.css'; // Importing the CSS file

const Header = () => {
  return (
    <main className="flex justify-between items-center w-full px-4 py-4 bg-gray-800">
      <h1>My Portfolio</h1> {/* Added text-white class for white color */}
      
      <nav>
        <ul className="navList flex space-x-6">
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
