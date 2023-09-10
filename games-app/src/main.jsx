import React from 'react'
import ReactDOM from 'react-dom/client'
import MainGamesApp from './components/MainGamesApp.jsx'
import "./css/games-app.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainGamesApp></MainGamesApp>
  </React.StrictMode>,
)
