import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <h1>Chat App</h1>
      <Outlet />
    </main>
  );
}
 
export default Layout;