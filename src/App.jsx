import { ListGroup } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CuadroAvatar from './components/CuadroAvatar';
import CuadroInfo from './components/CuadroInfo';

function App() {
  let empleados = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business",
    pic: "https://images.vexels.com/media/users/3/135247/isolated/preview/e70a6296c2a79dc7a56ab05b103f38e8-signo-de-usuario-con-fondo.png" },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing",
     pic: "https://images.vexels.com/media/users/3/135247/isolated/preview/e70a6296c2a79dc7a56ab05b103f38e8-signo-de-usuario-con-fondo.png" },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", 
    pic: "https://images.vexels.com/media/users/3/135247/isolated/preview/e70a6296c2a79dc7a56ab05b103f38e8-signo-de-usuario-con-fondo.png" },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", 
    pic: "https://images.vexels.com/media/users/3/135247/isolated/preview/e70a6296c2a79dc7a56ab05b103f38e8-signo-de-usuario-con-fondo.png" },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing",
      pic: "https://images.vexels.com/media/users/3/135247/isolated/preview/e70a6296c2a79dc7a56ab05b103f38e8-signo-de-usuario-con-fondo.png" },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering",
     pic: "https://images.vexels.com/media/users/3/135247/isolated/preview/e70a6296c2a79dc7a56ab05b103f38e8-signo-de-usuario-con-fondo.png" },
    { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", 
      pic: "https://images.vexels.com/media/users/3/135247/isolated/preview/e70a6296c2a79dc7a56ab05b103f38e8-signo-de-usuario-con-fondo.png" },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering",
     pic: "https://images.vexels.com/media/users/3/135247/isolated/preview/e70a6296c2a79dc7a56ab05b103f38e8-signo-de-usuario-con-fondo.png" },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department:"Engineering",  
     pic: "https://images.vexels.com/media/users/3/135247/isolated/preview/e70a6296c2a79dc7a56ab05b103f38e8-signo-de-usuario-con-fondo.png" }
    ];
    const listado = empleados.map(
      (empleado) => 
        <ListGroup.Item className='row d-flex'>
          <CuadroAvatar img={empleado.pic}/>
          <CuadroInfo info={empleado}/>
        </ListGroup.Item>)

  return (
    <>
      <ListGroup>
        {listado}
      </ListGroup>
    </>
  )
}

export default App
