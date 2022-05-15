import Category from "./component/Category";
import Pages from "./pages/Pages";

import { BrowserRouter } from 'react-router-dom';
import Search from "./component/Search";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages></Pages>
      </BrowserRouter>
    </div>
  );
}

export default App;
