import Navbar from './static/navbar';
import { Outlet } from 'react-router-dom';
import Footer from './static/footer';
import SideBar from './static/sideBar';

function App() {
  return (
    <div className='relative flex flex-col gap-4'>
      <Navbar />
      <div className='flex gap-1 w-full'>
        <SideBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
