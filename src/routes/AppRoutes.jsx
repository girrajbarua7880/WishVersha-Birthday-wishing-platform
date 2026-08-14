import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import EventSelector from "../components/builder/EventSelector";
import TemplateSelector from "../components/builder/TemplateSelector";
import WishBuilder from "../components/builder/WishBuilder";

import CountdownPage from "../components/builder/countdown/CountdownPage";
import WishPage from "../components/builder/share/WishPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================
            MAIN WEBSITE
        ========================= */}

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* =========================
            AUTH
        ========================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* =========================
            WISH BUILDER
        ========================= */}

        <Route
          path="/create/events"
          element={<EventSelector />}
        />

        <Route
          path="/create/:event/templates"
          element={<TemplateSelector />}
        />

        <Route
          path="/create/:event/:template"
          element={<WishBuilder />}
        />

        {/* =========================
            OWNER COUNTDOWN
        ========================= */}

        <Route
          path="/create/:event/:template/countdown"
          element={<CountdownPage />}
        />

        {/* =========================
            OWNER WISH
        ========================= */}

        <Route
          path="/create/:event/:template/wish"
          element={<WishPage />}
        />

        {/* =========================
            SHARED LINK
            STEP 1: COUNTDOWN
        ========================= */}

        <Route
          path="/w/:wishId"
          element={<CountdownPage />}
        />

        {/* =========================
            SHARED LINK
            STEP 2: ACTUAL WISH
        ========================= */}

        <Route
          path="/w/:wishId/wish"
          element={<WishPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;