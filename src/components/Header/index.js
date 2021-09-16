import adrianzamora from "./../../assets/adrianzamora.jpg";
export default function Header() {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="http://soyadrianzamora.com/" target="_blank">
          <img src={adrianzamora} alt="" width="30" height="24" className=" d-inline-block img-fluid rounded-circle mx-3" />
          <p className="text-white d-inline-block">Creador de usuarios</p>
        </a>
      </div>
    </nav>
  )
}