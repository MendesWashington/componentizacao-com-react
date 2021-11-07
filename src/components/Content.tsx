import { ReactElement } from "react";

import '../styles/content.scss';
interface ContentProps {
  children: ReactElement;
  title: string;
}
export function Content({ children, title }: ContentProps) {
  // Complete aqui
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">{children}</div>
      </main>
    </div>
  );
}
