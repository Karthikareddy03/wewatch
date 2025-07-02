import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp, UserProfile } from "@clerk/clerk-react";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import MovieForm from "./pages/Admin/Movies/MovieForm";
import MovieDetails from "./pages/MovieDetails";
import ProtectedPage from "./components/ProtectedPages";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";

function App() {
  const loading = useSelector((state) => state.loaders?.loading || false);

  return (
    <>
      {loading && <Spinner />}
      <Routes>
        {/* Clerk Auth Routes */}
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        <Route path="/user/*" element={<UserProfile />} />

        {/* Protected App Routes */}
        <Route path="/" element={<ProtectedPage><Home /></ProtectedPage>} />
        <Route path="/profile" element={<ProtectedPage><Profile /></ProtectedPage>} />
        <Route path="/admin" element={<ProtectedPage><Admin /></ProtectedPage>} />
        <Route path="/admin/movies/add" element={<ProtectedPage><MovieForm /></ProtectedPage>} />
        <Route path="/admin/movies/edit/:id" element={<ProtectedPage><MovieForm /></ProtectedPage>} />
        <Route path="/movie/:id" element={<ProtectedPage><MovieDetails /></ProtectedPage>} />

        {/* Fallback for Clerk redirects like /login/factor-one */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
