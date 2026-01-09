// Header Component
// Reusable navigation header for all pages

function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>ReClaim Pro</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/assess">Assess Device</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
