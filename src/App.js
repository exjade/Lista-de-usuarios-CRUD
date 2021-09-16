import './App.css';
import Header from './components/Header'
import FormUser from './components/FormUser'
import ListUsers from './components/ListUsers';
import UserState from './context/UserState'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>

      <UserState>
        <Header />
        <div className="container p-4 bg-light bg-light">
          <div className="row">

            <div className="col-md-6">
              <FormUser />
            </div>

            <div className="col-md-6">
              <ListUsers />
            </div>

          </div>
        </div>

      </UserState>
    </>
  );
}

export default App;
