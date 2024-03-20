import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <div>
        <header>Header</header>
        <Outlet />
        <footer>Footer</footer>
      </div>
    </>
  );
}
