import { useState, useEffect } from 'react';
import './style.css';

function App() {
  const [nutri, setNutri] = useState([]);
  useEffect(()=>{
    let url = "https://sujeitoprogramador.com/rn-api/?api=posts"

    fetch(url)
    .then((r)=> r.json())
    .then((json)=>{
      console.log(json)
      setNutri(json);
    })
  },[]);
  return (
    <div className="conteiner">
       <header>
      <strong>React Nutri</strong>
      </header>
      {nutri.map((item)=>{
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa"/>
            <p className="subtitulo">
            {item.subtitulo}</p>
            <h1>{item.categoria}</h1>
            <a className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  )
}

export default App
