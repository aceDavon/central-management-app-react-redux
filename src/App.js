import Navbar from './static/navbar';
import { Outlet } from 'react-router-dom';
import Footer from './static/footer';
import SideBar from './static/sideBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectAllUsers } from './features/users/userSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  return (
    <div className="relative flex flex-col gap-4">
      <Navbar />
      <div className="flex gap-1 w-full">
        <div className="hidden lg:inline-block">
          {isLoggedIn && <SideBar />}
        </div>
        <Outlet />
      </div>
      <div className="relative bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
