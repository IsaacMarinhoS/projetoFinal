import React from 'react';
import styles from './favoritos.module.css';
import { Star, StarHalf } from "@phosphor-icons/react"; // Importando as estrelas

export function Favoritos() {
    const concursosFavoritos = [
        { id: 1, titulo: "Concurso A", data: "01/01/2024", descricao: "Descrição do Concurso A", link: "#" },
    ];
    
    return (
       
       
       <div className={styles.favoritosContainer}>
            <h1>Meus Favoritos</h1>
            {concursosFavoritos.length === 0 ? (
                <p>Nenhum concurso favorito encontrado.</p>
            ) : (
                <ul className={styles.favoritosList}>
                    {concursosFavoritos.map((concurso) => (
                        <li key={concurso.id} className={styles.favoritoItem}>
                            <div className={styles.favoritoContent}>
                                <Star size={24} color="#FFD700" weight="fill" /> {/* Estrela cheia */}
                                <Star size={24} color="#FFD700" weight="regular" /> {/* Estrela contornada */}
                                <h2 className={styles.titulo}>{concurso.titulo}</h2>
                            </div>
                            <p>Data: {concurso.data}</p>
                            <p>{concurso.descricao}</p>
                            <a href={concurso.link} className={styles.link}>Ver mais detalhes</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Favoritos;