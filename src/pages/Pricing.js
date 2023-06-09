import React, { Component } from 'react';
import axios from 'axios';
// import '../App.css';

class Pricing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombremascota: '',
      apellidomascota: '',
      fechanacimiento: '',
      raza: '',
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
    const { nombremascota, apellidomascota, fechanacimiento, raza } =
      this.state;

    return (
      <div class=" max-w-xs flex justify-center" className="container">
        <form
          class="bg-white opacity-80 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={this.submitHandler}
        >
          <div class="justify-center block text-gray-700 text-sm font-bold mb-4 ">
            <p class="text-center">REGRISTRO DE USUARIOS</p>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="nombremascota"
              value={nombremascota}
              onChange={this.changeHandler}
              placeholder="Nombre"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Apellidos
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="apellidomascota"
              value={apellidomascota}
              onChange={this.changeHandler}
              placeholder="Apellido"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Correo
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="fechanacimiento"
              value={fechanacimiento}
              onChange={this.changeHandler}
              placeholder="ejemplo@mail.com"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              DNI
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="raza"
              value={raza}
              onChange={this.changeHandler}
              placeholder="DNI"
            />
          </div>
          <div className='flex justify-center flex-col'>
          <button
            type="submit"
            class=" mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Registrase
          </button>
          <button
            type="submit"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  "
          >
            Cancelar
          </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Pricing;

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

// export default function Pricing() {
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
