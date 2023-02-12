import { Item } from './Nav.styled';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Item to="/">Home</Item>
        </li>
        <li>
          <Item to="events">Events</Item>
        </li>
        <li>
          <Item to="search">Search</Item>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
