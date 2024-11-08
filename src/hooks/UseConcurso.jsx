import { useState, useEffect } from "react";
import axios from "axios";

const useConcursos = (uf) => {
  const [concursos, setConcursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConcursos = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/concursos?uf=${uf}`);
        setConcursos(response.data);
      } catch (error) {
        console.error("Erro ao buscar concursos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchConcursos();
  }, [uf]);

  return { concursos, loading };
};

export default useConcursos;
