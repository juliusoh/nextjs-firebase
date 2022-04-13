import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

// Top navbar
export default function Navbar() {
 const {user, userName} = useContext(UserContext)
 return (
  <nav className="navbar">
    <ul>
      <li>
        <Link href="/">
          <button className="btn-logo">NextJS-Firebase</button>
        </Link>
      </li>

      {/* user is signed-in and has username */}
      {userName && (
        <>
          <li className="push-left">
            <Link href="/admin">
              <button className="btn-blue">Write Posts</button>
            </Link>
          </li>
          <li>
            <Link href={`/${userName}`}>
              <img src={user?.photoURL} />
            </Link>
          </li>
        </>
      )}

      {/* user is not signed OR has not created username */}
      {!userName && (
        <li>
          <Link href="/enter">
            <button className="btn-blue">Log in</button>
          </Link>
        </li>
      )}
    </ul>
  </nav>
);
}