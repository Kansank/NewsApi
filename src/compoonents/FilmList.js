import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FilmList() {
  const [items, setItems] = useState([]);
  const [examples, setExample] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fecthData = async () => {
      try {
        const { data } = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=th&apiKey=79c456b534884b9398cbdb580720ea75"
        );
        let ex = [];   
        for(let i = 0; i < 6 ; i++){
          ex.push(data.articles[i])
        } 
        setExample(ex);
        setItems(data.articles);

      } catch (err) {
        setError(err.message);
      }
    };
    fecthData();
  }, []);

  return (
    <div className="Film-List">
      
          <h1>Film List</h1>
          <hr></hr>
          <div className="grid">

          {examples.map((example, index) => (
            <a href={example.url} >
            <div className="card"  key={example.source.id }> 
            <img className="card-img-top" src={example.urlToImage} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                {example.source.name}
              </p>
            </div>
          </div>
          </a>
          ))  }

          </div>
       
    </div>
  );
}
