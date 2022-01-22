import { Outlet } from "remix";

export default function JokesRoutes() {
  return (
    <div>
      <h1>J🤪kes</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
