import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { Sun, Moon, List } from "@phosphor-icons/react"; 
import styles from "./header.module.css";
import { Modal } from "../Modal/Modal";
import { useTheme } from "../../contexts/ThemeContext";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation(); // Obtém a rota atual
  const navigate = useNavigate(); // Permite navegação programática
  const backButtonPages = ["/bloco-de-notas", "/ajuda-nos-estudos", "/favoritos"];

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const showBackButton = backButtonPages.includes(location.pathname); // Verifica se deve exibir o botão "Voltar"

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* Tema (Sol/Lua) */}
      <button onClick={toggleTheme} className={styles.menuButton}>
        {isDarkMode ? <Sun size={20} weight="bold" /> : <Moon size={20} weight="bold" />}
      </button>

      {/* Botão do menu hambúrguer (para telas menores) */}
      <button className={styles.menuButton} onClick={toggleMenu} aria-label="Abrir menu">
        <List size={32} />
      </button>

      {/* Menu lateral (telas menores) */}
      <div className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ""}`}>
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/bloco-de-notas">Bloco de Notas</Link></li>
            <li><Link to="/ajuda-nos-estudos">Professores</Link></li>
            <li><Link to="/favoritos">Favoritos</Link></li>
            <li><button onClick={toggleMenu}>Fechar</button></li>
          </ul>
        </nav>
      </div>

      {/* Menu de navegação padrão (telas maiores) */}
      <nav className={styles.navDesktop}>
        <ul>
          {/* Botão Voltar condicional */}
          {showBackButton && (
            <li>
              <button className={styles.sobreNoisButton} onClick={() => navigate(-1)}>
                Voltar
              </button>
            </li>
          )}
          <div className={styles.sobreNoisButton}>
          <li><Link to="/bloco-de-notas">Bloco de Notas</Link></li>
          </div>
          <div  className={styles.sobreNoisButton}>
          <li><Link to="/ajuda-nos-estudos">Professores</Link></li>
          </div>
          <div  className={styles.sobreNoisButton}>
          <li><Link to="/favoritos">Favoritos</Link></li>
          </div>
         
          <li>
            <button onClick={toggleTheme} className={styles.themeToggle}>
              {isDarkMode ? <Sun size={20} weight="bold" /> : <Moon size={20} weight="bold" />}
            </button>
          </li>
          <li>
            <button className={styles.loginButton} onClick={() => setIsModalOpen(true)}>
              Login
            </button>
          </li>
        </ul>
      </nav>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
