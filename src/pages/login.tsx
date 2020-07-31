import { useRef, useState } from 'react';

const login = () => {
  const [message, setMessage] = useState(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const handleLogin = async () => {
    console.log(emailRef.current?.value, passRef.current?.value);

    const respose = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailRef.current?.value,
        password: passRef.current?.value,
      }),
    });

    const result = await respose.json();
    setMessage(result);
    console.log(result);
  };

  return (
    <div>
      {message && JSON.stringify(message)}
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        ref={emailRef}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        ref={passRef}
      />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default login;
