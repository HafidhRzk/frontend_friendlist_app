import { Routes, Route } from 'react-router-dom';
import Chart from './pages/chart';
import FriendList from './pages/friendList';
import InputList from './pages/inputList';
import UpdateList from './pages/updateList';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<FriendList />} />
      <Route path="/chart" element={<Chart />} />
      <Route path="/inputlist" element={<InputList />} />
      <Route path="/updatelist/:id" element={<UpdateList />} />
    </Routes>
  );
}

export default App;
