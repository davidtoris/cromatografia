import React, { useState, useEffect }  from 'react';
import { collection, doc, getDocs } from "firebase/firestore";
import db from '../firebase/firebaseConfig';

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
      {students.map(s => (
      <div className='grid grid-cols-1 sm:grid-cols-2 border-2 mb-4 sm:mb-0'>
        <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-greenCustom" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
          </svg>
          <div className='ml-2 font-bold'>Nombre: <span className='font-normal'>{s.valores.nombre}</span> </div>
        </div>
        <div className='ml-2 font-bold'>Correo: <span className='font-normal'>{s.valores.correo}</span></div>
      </div>
      ))}
    </div>
  )
};

export default Results;
