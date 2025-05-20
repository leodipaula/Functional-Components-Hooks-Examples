interface HomeProps {
  titulo: string;
  texto: string;
}

function Home(props: HomeProps) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
    </div>
  )
}

export default Home