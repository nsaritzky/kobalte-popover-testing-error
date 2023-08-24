import type { Component } from "solid-js";
import { Popover } from "@kobalte/core";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Popover.Root>
          <Popover.Trigger>open</Popover.Trigger>
          <Popover.Portal>
            <Popover.Content>
              <div>hello</div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </header>
    </div>
  );
};

export default App;
