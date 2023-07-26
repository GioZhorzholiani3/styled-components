import GlobalStyle from "./globalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/pricing",
      element: <PricingPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
  ]);
  return (
    <RouterProvider router={router}>
      <GlobalStyle />
    </RouterProvider>
  );
}

export default App;
