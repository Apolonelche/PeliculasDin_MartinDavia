function Interprete(props) {
  const {foto, nombre} = props;
  return (
    <>
      <div className="interprete">
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
