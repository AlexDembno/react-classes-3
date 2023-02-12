import { Outlet } from 'react-router-dom';
import Nav from 'components/Nav/Nav';

function Layout() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
