import React, { Component } from 'react';
import axios from 'axios';
// import '../App.css';

class Registromascota extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      title: '',
      body: '',
      dni: '',
      especie: '',
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.sate)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body, dni, especie } = this.state;

    return (
      <div class="max-w-xs mascota  " className="container">
        <form
          class="bg-white opacity-80 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={this.submitHandler}
        >
          <div class="justify-center block text-gray-700 text-sm font-bold mb-2 ">
            <p class="text-center">REGISTRO DE MASCOTAS</p>
          </div>

          <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
              placeholder="Nombre"
            />
          </div>
          <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Apellido
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
              placeholder="Apellido"
            />
          </div>
          <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Sexo
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Raza
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="dni"
              value={dni}
              onChange={this.changeHandler}
              placeholder="raza"
            />
          </div>
          <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Especie
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="especie"
              value={especie}
              onChange={this.changeHandler}
              placeholder="especie"
            />
          </div>
          <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Fecha de nacimiento
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
              placeholder="día/mes/año"
            />
          </div>
          <div class="mb-5">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Usuario
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="dueño de mascota"
            />
          </div>
          <div className='flex justify-center flex-col'>

          <button
            type="submit"
            class=" mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center"
          >
            Registrar
          </button>
          <button
            type="submit"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center"
          >
            Cancelar
          </button>
          
          </div>
        </form>
      </div>
    );
  }
}

export default Registromascota;

//Codigo de Formulario solo Frontend//
// export default function About() {
//   return (
//     <div class=" max-w-xs flex justify-center">
//       <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div class="mb-4">
//           <label
//             class="block text-gray-700 text-sm font-bold mb-2"
//             for="username"
//           >
//             Nombre
//           </label>
//           <input
//             class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="username"
//             type="text"
//             placeholder="Nombre"
//           />
//         </div>
//         <div class="mb-6">
//           <label
//             class="block text-gray-700 text-sm font-bold mb-2"
//             for="password"
//           >
//             Apellido
//           </label>
//           <input
//             class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             placeholder="******************"
//           />
//           <p class="text-red-500 text-xs italic">Please choose a password.</p>
//         </div>
//         <div class="flex items-center justify-between">
//           <button
//             class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="button"
//           >
//             Sign In
//           </button>
//           <a
//             class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//             href="#"
//           >
//             Forgot Password?
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// }
