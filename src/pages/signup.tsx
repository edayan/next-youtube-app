import { useRef, useState } from 'react';

const signup = () => {
  const [message, setMessage] = useState(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const handleLogin = async () => {

    const respose = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name:  nameRef.current?.value,
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
        <h3>Create User</h3>
      {message && JSON.stringify(message)}
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        ref={nameRef}
      />
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

export default signup;
