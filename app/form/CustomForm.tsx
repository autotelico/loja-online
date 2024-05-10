'use client'
import { useState } from 'react';

export default function CustomForm({
  status,
  message,
  onValidated,
}): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email &&
      name &&
      phone &&
      email.indexOf('@') > -1 &&
      email.includes('.') &&
      onValidated({
        EMAIL: email,
        MERGE1: name,
        MERGE4: phone,
      });
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="mc__title">
        Preencha o formulário e entre para nosso grupo do WhatsApp!
      </h3>

      {status === 'sending' && (
        <div className="mc__alert mc__alert--sending">enviando...</div>
      )}
      {status === 'error' && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <div className="mc__field-container">
        {/* nome */}
        <label htmlFor="MERGE1">
          Nome
          <input
            type="text"
            name="MERGE1"
            id="MERGE1"
            value=""
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {/* email */}
        <label htmlFor="MERGE0">
          E-mail
          <input
            type="email"
            name="MERGE0"
            id="MERGE0"
            value=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {/* telefone */}
        <label htmlFor="MERGE4">
          Celular
          <input
            type="text"
            name="MERGE4"
            id="MERGE4"
            value=""
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}
