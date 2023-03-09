
import NoEncryptionGmailerrorredIcon from '@mui/icons-material/NoEncryptionGmailerrorred';
import EmailIcon from '@mui/icons-material/Email';

function InputComponent() {
  return (
        <>
      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
        Email
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <EmailIcon className="h-5 w-5 text-gray-500" />
        </span>
        <input
          id="email"
          type="email"
          className="w-full sm:w-1/2 bg-blue-100 border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
          placeholder="Digite seu email"
        />
      </div>
      <label htmlFor="password" className="block text-gray-700 font-bold mb-2 mt-4">
        Senha
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <NoEncryptionGmailerrorredIcon className="h-5 w-5 text-gray-500" />
        </span>
        <input
          id="password"
          type="password"
          className="w-full sm:w-1/2 bg-blue-100 border rounded py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
          placeholder="Digite sua senha"
        />
      </div>
      </>

  );
}

export default InputComponent;