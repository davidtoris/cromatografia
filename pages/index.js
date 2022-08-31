import Head from 'next/head'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/router'
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/firebaseConfig';

export default function Home() {
  const router = useRouter();

  const date = new Date();
  const fecha = date.toLocaleDateString() + ' ' + date.getHours() + ':' + date.getMinutes();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-grayCustom">
      <Head>
        <title>Reto Cromatografía</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
      </Head>
      <div className='bg-grayCustom'>
        {/* <img src="./logo.png" width="600px" className='my-5'/> */}
        <img src="./banner2.png" width="600px"/>
        <div className='text-center'>
          {/* <div className='bg-redConsufarma p-3 h-3'>
          </div> */}
          {/* <div className='bg-blueConsufarma p-3 text-white text-4xl font-extrabold'>
            Jueves 8 de Septiembre 2022
          </div>
          <div className='text-orangeCustom text-4xl font-extrabold my-4'>
            Horario
          </div>
          <div className='text-gray-500 text-2xl font-italic my-4'>
            Ciudad México y Colombia- 10 h <br></br>
            Guatemala - 9h <br></br>
            Argenitna - 12h <br></br>
            Chile - 11h <br></br>
          </div> */}
          {/* <div className='text-orangeCustom text-3xl font-bold mt-4'>
            Participa por una Promoción Especial
          </div>
          <div className='text-gray-600 text-2xl font-bold mb-4'>
            Duración aproximada 40 min.
          </div> */}

          <Formik
              initialValues={{
                nombre: '',
                correo: '',
                fecha
              }}
              validate={(valores) => {
                const errores = {};
                if (valores.nombre === '') {
                  errores.nombre = 'Este campo no puede ir vacio';
                }
                if (valores.correo === '') {
                  errores.correo = 'Este campo no puede ir vacio';
                }
                return errores;
              }}
              onSubmit={async (valores) =>  {
                // Add a new document with a generated id.
                await addDoc(collection(db, "validacion"), {
                  valores
                });
                router.push('/thanks')
              }}>
              {({ errors }) => (

                <Form>
                  <div className='text-left text-blue-900 font-bold text-lg ml-2'>Nombre:</div>  
                  <div className="mb-3">
                    <Field type="text" 
                    className="form-control" 
                    aria-describedby="emailHelp"
                    name="nombre"
                    />
                    <ErrorMessage
                        name="nombre"
                        component={() => (
                          <div className="text-orangeCustom mt-1">{ errors.nombre }</div>)} />
                  </div> 
                  <div className='text-left text-blue-900 font-bold text-lg ml-2'>Correo:</div>  
                  <Field 
                    type="email" 
                    className="form-control mb-2" 
                    aria-describedby="emailHelp"
                    name="correo" />  
                    <ErrorMessage
                        name="correo"
                        component={() => (
                          <div className="text-orangeCustom mt-1">{ errors.correo }</div>)} />  
                  
                  <button type="submit" className="btn btn-primary bg-blueConsufarma border-0 w-100 p-2 text-2xl rounded-lg font-bold shadow-xl mt-2 mb-6">
                    Enviar
                  </button>
                </Form>
              )}
          </Formik>
        </div>

      </div>
    </div>
  )
}
