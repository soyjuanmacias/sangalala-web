import './App.css'

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="icon">🌍 🇲🇼</div>
        <h1>Sangalala Malawi</h1>
        <div className="divider"></div>
        <p className="subtitle">Estamos construyendo algo increíble</p>
        <p className="description">
          Nuestra web está en construcción. Pronto podrás conocer más sobre
          nuestra labor en Malawi.
        </p>
        <div className="badge">Próximamente</div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sangalala Malawi. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
