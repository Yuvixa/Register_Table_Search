import { Component } from 'react';
import '../Table.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url='https://jsonplaceholder.typicode.com/users';

class Home extends Component {
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    id: '',
    name: '',
    username: '',
    phone: '',
    tipoModal: ''
  }
}

peticionGet=()=>{
axios.get(url).then(response=>{
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}


peticionPost=async()=>{
  delete this.state.form.id;
await axios.post(url,this.state.form).then(()=>{
    this.modalInsertar();
    this.peticionGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

peticionPut=()=>{
  axios.put(url+this.state.form.id, this.state.form).then(()=>{
    this.modalInsertar();
    this.peticionGet();
  })
}

peticionDelete=()=>{
  axios.delete(url+this.state.form.id).then(()=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
  })
}

modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

seleccionarEmpresa=(user)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: user.id,
      name: user.name,
      username: user.username,
      phone: user.phone,
      raza: user.raza,
      especie: user.especie,
      nacimiento: user.nacimiento,
    }
  })
}

handleChange=async e=>{
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.peticionGet();
  }
  

  render(){
    const {form}=this.state;
  return (
    <div className="container">
      <h1 className='text-2xl font-bold mb-4'>Listado de Mascotas</h1>
  <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Mascota</button>
  
    <div className=''>
     <table className="table mx-6 my-5 table-striped table-hover shadow-lg " >
      <thead>
        <tr className="text-black bg-white opacity-80 text-center">
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Sexo</th>
          <th>Raza</th>
          <th>Especie</th>
          <th>Fecha de Nacimiento</th>
          <th>Dueño</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody class="text-black bg-white opacity-80 text-center">
        {this.state.data.map(user=>{
          return(
            <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.phone}</td>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.phone}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(user); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpresa(user); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
          </td>
          </tr>
          )
        })}
      </tbody>
    </table>



    <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}} className='bg-gray-200'>
                  Actualizar Datos de Mascota
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} defaultValue={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="name">Nombre de la Mascota</label>
                    <input className="form-control" type="text" name="name" id="name" onChange={this.handleChange} defaultValue={form?form.name: ''}/>
                    <br />
                    <label htmlFor="name">Apellido de la Mascota</label>
                    <input className="form-control" type="text" name="username" id="username" onChange={this.handleChange} defaultValue={form?form.username: ''}/>
                    <br />
                    <label htmlFor="phone">Sexo de la Mascota</label>
                    <input className="form-control" type="text" name="phone" id="phone" onChange={this.handleChange} defaultValue={form?form.phone: ''}/>
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal=='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar a la mascota {form && form.name}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
  </div>
  </div>



  );
}
}
export default Home;



// import { useEffect, useState } from 'react';
// import Axios from 'axios';
// import '../styles.css';

// export default function Home() {
//   const [data, setDate] = useState([]);

//   useEffect(() => {
//     Axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => {
//         console.log('Getting from ::::', res.data);
//         setDate(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const arr = data.map((data) => {
//     return (
//       <tbody key={data.id}>
//         <tr>
//           <td class="p-4">{data.id}</td>
//           <td class="p-4">{data.title}</td>
//           <td class="p-4">{data.body}</td>
//         </tr>
//       </tbody>
//     );
//   });

//   return (
//     <div className="Home">
//       <h1 class="p-4">Lets use Axios with React js</h1>
//       <table>
//         <thead>
//           <tr>
//             <th class="p-4">Nombre</th>
//             <th class="p-4">Raza</th>
//             <th class="p-4">Especie</th>
//           </tr>
//         </thead>
//         {arr}
//       </table>
//     </div>
//   );
// }

