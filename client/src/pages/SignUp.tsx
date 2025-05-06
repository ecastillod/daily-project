import { Link } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';


export default function SignUp() {
  return (
    <div className="min-h-screen mt-50">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        {/* left */}
        <div className='flex-1'>
        <Link to="/" className="space-x-2 font-bold text-4xl">
        <span className="px-3 py-3 bg-gradient-to-br from-pink-300 via-orange-500 to-red-500 text-white rounded-lg">
          Daily</span>
          Context
      </Link>
      <p className='text-sm mt-5 font-semibold'>
        Escribe más. Conecta con tu comunidad. <br />Destaca entre los mejores.
      </p>
      </div>
      {/* right */}
        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div>
              <Label>Nombre de usuario</Label>
              <TextInput type='text' placeholder='Nombre de usuario' id='username'></TextInput>
            </div>
            <div>
              <Label>Correo electrónico</Label>
              <TextInput type='text' placeholder='Email' id='email'></TextInput>
            </div>
            <div>
              <Label>Contraseña</Label>
              <TextInput type='text' placeholder='Contraseña' id='password'></TextInput>
            </div>
            <Button className="text-white font-semibold bg-blue-500 hover:bg-blue-800" type='submit'>Crear cuenta</Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Ya tienes cuenta? </span>
          <Link to="/sign-in" className='text-blue-500'>
          Ingresa aquí
          </Link></div>
        </div>
      </div>
    </div>
  )
}
