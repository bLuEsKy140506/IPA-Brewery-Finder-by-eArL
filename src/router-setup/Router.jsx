import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RouteLayout from "../layouts/MainLayout/RouteLayout";

import BreweryList from "../pages/BreweryList/BreweryList";
import BreweryDetail, {
  breweryDetail,
} from "../pages/BreweryDetails/BreweryDetail";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<BreweryList />} />
      <Route
        path="brewery/:id"
        element={<BreweryDetail />}
        loader={breweryDetail}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
