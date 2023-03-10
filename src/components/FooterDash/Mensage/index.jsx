import { useState } from 'react';
import emailjs from '@mailjs/brownser';


  /* Adicionar toast para email enviado e toast para quando nos preeencher campos devidamente*/ 
const ClientMail (/*verificar com Mari e Matheus*/)=>{
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="container">
    <div className ="bodyMail"> </div>
    <section> <h1 className="title">Contato</h1></section>
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={sendMail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}




export default MailClient;
