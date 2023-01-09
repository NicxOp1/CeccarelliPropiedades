import React from "react";
import { Route, Routes } from "react-router-dom";
/* import SignInUp from "./pages/SignInUp";
import AddGame from "./pages/AddGame"; */
import Home from "./pages/Home";
import Properties from "./pages/Properties";
/* import Cart from "./pages/Cart/Cart";
import Profile from "./Components/Profile/Profile";
import Store from "./pages/Store/Store";
import NotFoundPage from "./pages/NotFound";
import ProfileEdit from "./Components/Profile/ProfileEdit";
import Library from "./pages/LibraryPage/Library";
import GameDitails from "./pages/Ditails/GameDitails";
import { useSelector } from "react-redux";
import ProtectedRoute from "./Components/ProtectedRoute";
 */
export const ComponentRoutes=()=> {
/*   let user = useSelector((store) => store.userReducer);
  let admin = user.role === "admin";
  let logged = user.logged; */

  return (
    <Routes>
      {/*  NoLogin-Login  */}
      <Route path="/" element={<Home/>} />
      <Route path='/Propiedades' element={<Properties/>} />
{/*       <Route path="/*" element={<NotFoundPage />} />
      <Route path="/SignInUp" element={<SignInUp />} />
      <Route path="/Ditails/:id" element={<GameDitails />} />
      <Route path="/Store" element={<Store />} /> */}
      {/* End NoLogin-Login  */}
      {/* {/* Users Login */}
{/*       <Route
        element={<ProtectedRoute isAllowed={!!logged} reDirect={"/SignInUp"} />}
      >
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ProfileEdit" element={<ProfileEdit />} />
        <Route path="/Library" element={<Library />} />
      </Route>

      <Route element={<ProtectedRoute isAllowed={!!admin} reDirect="/" />}>
        <Route path="/AddGame" element={<AddGame />} />
      </Route>
     */}
    </Routes>
  );
}
