import { NavigationBar } from './navigationBar'

export function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <a
          href="#inicio"
          aria-label="Cenora - início"
          className="brand"
        >
          <span aria-hidden="true" className="brand-mark" />
          Cenora
        </a>

        <NavigationBar />
      </div>
    </header>
  )
}
