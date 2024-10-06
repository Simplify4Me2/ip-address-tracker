import { PropsWithChildren } from "react";
import './Header.css';

export function Header({ children }: PropsWithChildren) {
  return (
    <header>
      <h1 className="app-title">IP Address Tracker</h1>
      {children}
    </header>
  );
}
