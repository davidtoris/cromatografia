
export default function Thanks() {

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      
      <body className='bg-white'>
        <img src="./logo.png" width="600px" className='my-5 m-auto'/>
        <img src="./logo-reto2.png" width="300px" className='my-5 m-auto'/>
        <div className='text-center'>
          <div className='text-redConsufarma p-3 text-5xl font-extrabold'>
            ¡Gracias por tu registro!
          </div>
          <div className='text-gray-600 p-3 text-3xl font-mediumbold'>
            Te estaremos enviando a tu correo el link para que puedas acceder.
          </div>
          <div className='bg-redConsufarma p-3 h-3'>
          </div>
          <div className='bg-blueConsufarma p-3 text-white text-4xl font-extrabold'>
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
          </div>
          
          
        </div>

      </body>
    </div>
  )
}
