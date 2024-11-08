import styles from "./home.module.css";
import studying from "../../img/8602650.png";
import ConcursoList from "../ConcursoList/ConcursoList";
import { Link } from "react-router-dom";

import { useState } from "react";
export function Home() {
  const [uf, setUf] = useState("rj");

   const scrollToSection = () => {
    document.getElementById("curso-link").scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className={styles.divider} />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Concursos em todo o Brasil</h1>
          <p className={styles.description}>
            Fique por dentro de todos os concursos nacionais!
          </p>
          <button onClick={scrollToSection} className={styles.buttonCreate}>
            Garanta sua vaga
          </button>
        </div>
        <div className={styles.cardContainer}>
          <img src={studying} alt="Estudante se preparando para concurso" />
        </div>
      </div>


      


      <div id="curso-link">
      
      <ConcursoList  uf={uf} setUf={setUf}/>
      
      </div>

      <div id="sobre-nos">
                <div className={styles.sobre}>

                    <h1>Bem-vindo ao SennaProv</h1>
                    <p>
                        Sua fonte confiável para todas as informações sobre concursos públicos no Brasil.
                        Nosso objetivo é manter você atualizado sobre os concursos abertos, os processos
                        seletivos em andamento e aqueles que estão por vir, além de fornecer detalhes
                        sobre concursos já encerrados.
                    </p>
                    <p>
                        Com uma equipe dedicada de especialistas, estamos sempre acompanhando as novidades
                        dos órgãos públicos federais, estaduais e municipais, garantindo que você tenha
                        acesso a informações precisas e atualizadas. Nosso compromisso é facilitar a vida
                        de quem está em busca de uma oportunidade no serviço público, oferecendo conteúdo
                        de qualidade, dicas de estudo e notícias relevantes.
                    </p>
                    <p>Aqui no SennaProv você encontra:</p>
                    <ul>
                        <li>Listagem de concursos abertos em todo o Brasil</li>
                        <li>Informações detalhadas sobre cargos, requisitos e etapas de seleção</li>
                        <li>Datas de inscrição e provas</li>
                        <li>Resultados de concursos encerrados</li>
                        <li>Notícias e atualizações sobre alterações nos editais</li>
                    </ul>
                    <p>
                        Nosso objetivo é ser o parceiro ideal para você, concurseiro, que deseja conquistar
                        uma vaga no serviço público. Esteja sempre informado e preparado para aproveitar
                        as melhores oportunidades de crescimento na sua carreira.
                    </p>
                </div>





            </div>
    </>
  );
}
