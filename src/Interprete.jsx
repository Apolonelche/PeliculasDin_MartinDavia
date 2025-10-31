function Interprete(props) {
  const {foto, nombre, esNota10} = props;
  return (
    <>
      <div className={`interprete ${esNota10 ? 'nota10' : ''}`}>
        <img src={foto} alt={nombre} />
        <div>
          <h2>{nombre}</h2>
          <p>{props.children}</p>
        </div>
      </div>
    </>
  )
}

export default Interprete
