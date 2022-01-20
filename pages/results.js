import React, { useState, useEffect }  from 'react';
import { collection, doc, getDocs } from "firebase/firestore";
import db from '../firebase/firebaseConfig';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Results = () => {
  
  const [students, setStudents] = useState([]) 
  console.log(students);
  

  useEffect(() => {
    let arregloStudents = [];
    const studentsFirebase = async () => {
      const querySnapshot = await getDocs(collection(db, 'cromatografia'));
      setStudents(querySnapshot.docs.map((d) => ({...d.data(), id: doc.id }) ))
    };

    studentsFirebase();
    
  }, []);
  
  return (
    <div className="max-w-7xl mx-auto pb-10">
      <img src="./logo.png" width="600px" className='my-5 m-auto'/>
        <img src="./logo-reto.png" width="300px" className='my-5 m-auto'/>
      
      <div className='m-auto text-center'>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="table-auto max-w-7xl mx-auto bg-greenCustom p-3 text-white font-bold rounded-lg"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Descargar"/>
      </div>
       
       <table id="table-to-xls" class="table-auto max-w-7xl mx-auto pb-10 mt-8">
        <thead>
          <tr>
            <th className='font-bold text-2xl bg-redConsufarma p-2 text-white'>Nombre</th>
            <th className='font-bold text-2xl bg-redConsufarma p-2 text-white'>Correo</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
          <tr className='border-2 text-center'>
            <td className='border-2 p-2'>{s.valores.nombre}</td>
            <td className='border-2 p-2'>{s.valores.correo}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
};

export default Results;
