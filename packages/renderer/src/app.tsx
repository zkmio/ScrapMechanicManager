import { Component } from "solid-js";
import { useRoutes, useLocation } from "solid-app-router";

import { routes } from "./routes";
import { Sidebar } from "./sidebar";
import './app.css';
import { bucket } from "solid-new-bucket";
import { Dynamic } from "solid-js/web";

const App: Component = () => {
  const page = bucket(0);

  return (
    <div class="relative flex w-full h-full overflow-hidden bg-gray-300 p-2 gap-2">
      <Sidebar onSelect={page} />

      <div class="relative w-full h-full">
        <div class="absolute w-full h-full">
          <div class="relative w-full h-full">
            <Dynamic component={routes[page()].component} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
