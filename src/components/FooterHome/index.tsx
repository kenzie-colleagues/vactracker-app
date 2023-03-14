import React from 'react';
import { Link } from "react-router-dom";
import FaleConoscoImg from '../../assets/FaleConosco.png';

const FooterHomePage = () => {
  return (
    <footer className="flex flex-row items-center justify-center bg-[#DCF1FA] sm:h-87 text-sm py-4 px-6">
      <div className='flex flex-col'>
        <span className='text-emerald-800'>Central de Atendimento: 0800-1234-5678</span>
        <span className='text-emerald-800'>Atendimento 24 horas</span>
      </div>
      <div className='hidden sm:block'>
        <Link className='ml-64' to={"/mail"}>
          <span className='mr-4 text-emerald-800'>Fale Conosco</span>
          <img src={FaleConoscoImg} alt="Fale Conosco" className="inline-block h-12 w-12" />
        </Link>
      </div>
      <div className='block sm:hidden'>
        <Link to={"/mail"}>
          <img src={FaleConoscoImg} alt="Fale Conosco" className="inline-block h-12 w-12" />
        </Link>
      </div>
    </footer>
  );
};

export default FooterHomePage;






