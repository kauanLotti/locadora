export function NavigationBar() {
  return (
    <nav aria-label="Navegação principal">
      <ul className="navigation-list">
        <li>
          <a
            href="#catalogo"
            className="navigation-link"
          >
            Catálogo
          </a>
        </li>
        <li>
          <a
            href="#colecoes"
            className="navigation-link"
          >
            Coleções
          </a>
        </li>
        <li>
          <a
            href="#como-funciona"
            className="navigation-link"
          >
            Como funciona
          </a>
        </li>
      </ul>
    </nav>
  )
}
