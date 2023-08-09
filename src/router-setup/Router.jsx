import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//parent container
import RouteLayout from "../layouts/MainLayout/RouteLayout";
//outlet pages
import BreweryList from "../pages/BreweryList/BreweryList";//list of brewery
import BreweryDetail, {
  breweryDetail,
} from "../pages/BreweryDetails/BreweryDetail";//detailed page of each brewery
import WishList from "../pages/WishListBrewery/WishList";//wishlist page
import NotFound from "../pages/NotFound/NotFound";//if page cannot be found

//page flow structure
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<BreweryList />} />
      <Route
        path="brewery/:id"
        element={<BreweryDetail />}
        loader={breweryDetail}
      />
      <Route path="brewery/wishlist" element={<WishList />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
