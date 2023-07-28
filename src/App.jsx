import GlobalStyle from "./globalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import SignUpPage from "./pages/SignUpPage";
import Navbar from "../src/components/Navbar/NavBar";
import RootLayout from "./Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/pricing",
          element: <PricingPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <GlobalStyle />
    </RouterProvider>
  );
}

export default App;
