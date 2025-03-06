import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://backend:8000";

function App() {
    const [image, setImage] = useState(null);

    useEffect(() => {
      axios.get(`${API_BASE_URL}/image`, {
          headers: {
              "Content-Type": "application/json"
          }
      })
      .then(response => {
          console.log("✅ Resposta da API:", response.data);
          setImage(response.data);
      })
      .catch(error => console.error("🚨 Erro ao buscar imagem:", error));
  }, []);

    return (
        <div>
            <h1>Imagem do Dia da NASA</h1>
            {image && (
                <>
                    <h2>{image.title}</h2>
                    <img src={image.url} alt={image.title} width="500px" />
                </>
            )}
        </div>
    );
}

export default App;
