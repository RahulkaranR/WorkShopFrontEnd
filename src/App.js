import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import EditNote from "./features/notes/EditNote";
import NewNote from "./features/notes/NewNote";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import Prefetch from "./features/auth/Prefetch";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";


function App() { 
  return ( 
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Public />} />
            <Route path="Login" element={<Login />} />

            <Route element={ <PersistLogin /> } >
              <Route element={ <Prefetch /> } >
                <Route element={ <RequireAuth allowedRoles={[...Object.values(ROLES)]} /> } >
                  <Route path="dash" element={ <DashLayout /> }>
                    <Route index element={<Welcome />} />
                    <Route element={ <RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} /> } >
                      <Route path='users'>
                        <Route index element={<UsersList />} />
                        <Route path=":id" element={ <EditUser /> } />
                        <Route path="new" element={ <NewUserForm /> } /> 
                      </Route>
                    </Route>

                    <Route path='notes'>
                      <Route index element={<NotesList />} />
                      <Route path=":id" element={ <EditNote /> } />
                      <Route path="new" element={ <NewNote /> } /> 
                    </Route> 
                  </Route>
                </Route>
              </Route>
            </Route>
        </Route>
      </Routes>
   );
}

export default App;
