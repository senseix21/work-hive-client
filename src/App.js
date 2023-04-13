import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Routes';

function App() {
  return (
    <div className="App lg:mx-10">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
