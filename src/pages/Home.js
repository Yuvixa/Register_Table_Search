import { useEffect, useState } from 'react';
import Axios from 'axios';
import '../styles.css';

export default function Home() {
  const [data, setDate] = useState([]);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log('Getting from ::::', res.data);
        setDate(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.map((data) => {
    return (
      <tbody key={data.id}>
        <tr>
          <td class="p-4">{data.id}</td>
          <td class="p-4">{data.title}</td>
          <td class="p-4">{data.body}</td>
        </tr>
      </tbody>
    );
  });

  return (
    <div className="Home">
      <h1 class="p-4">Lets use Axios with React js</h1>
      <table>
        <thead>
          <tr>
            <th class="p-4">Nombre</th>
            <th class="p-4">Raza</th>
            <th class="p-4">Especie</th>
          </tr>
        </thead>
        {arr}
      </table>
    </div>
  );
}

// export default function Home() {
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
