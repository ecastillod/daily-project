import { Link, useNavigate } from 'react-router-dom';
import { Button, Label, TextInput, Alert, Spinner } from 'flowbite-react';
import { useState } from 'react';

// Define un tipo para el objeto de formulario
interface FormData {
  username?: string;
  email?: string;
  password?: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Por favor completa todos los campos.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMessage(data.message);
        setLoading(false); // Asegúrate de detener la carga en caso de error
        return;
      }
      setLoading(false);
      if (res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Ocurrió un error inesperado');
      }
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-40">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        {/* left */}
        <div className='flex-1'>
          <Link to="/" className="space-x-2 font-bold text-4xl">
            <span className="px-4 py-2 bg-gradient-to-br from-pink-300 via-orange-500 to-red-500 text-white rounded-lg">
              Daily</span>
            Context
          </Link>
          <p className='text-sm mt-5 font-semibold'>
            Escribe más. Conecta con tu comunidad. <br />Destaca entre los mejores.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label>Nombre de usuario</Label>
              <TextInput type='text' placeholder='Nombre de usuario' id='username' onChange={handleChange}></TextInput>
            </div>
            <div>
              <Label>Correo electrónico</Label>
              <TextInput type='email' placeholder='nombre@mail.com' id='email' onChange={handleChange}></TextInput>
            </div>
            <div>
              <Label>Contraseña</Label>
              <TextInput type='password' placeholder='Contraseña' id='password' onChange={handleChange}></TextInput>
            </div>
            <Button className="text-white font-semibold bg-blue-500 hover:bg-blue-800" type='submit' disabled={loading}>
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Cargando...</span>
                </>
              ) : 'Sign Up'}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Ya tienes cuenta? </span>
            <Link to="/sign-in" className='text-blue-500'>
              Ingresa aquí
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}