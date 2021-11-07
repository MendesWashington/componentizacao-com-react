import { ReactElement } from "react";
import "../styles/sidebar.scss";
interface SideBarProps {
  children: ReactElement;
}

export function SideBar({ children }: SideBarProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>
      {children}
    </nav>
  );
}
