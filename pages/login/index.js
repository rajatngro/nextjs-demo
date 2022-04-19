import Head from "next/head";

function Login() {
  function handleSubmit() {
    window.alert("Login");
  }

  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <h2>Login Here</h2>
        <p>Email Address</p>
        <input type={"email"} placeholder="Email ID"></input>
        <p>Password</p>
        <input type={"password"} placeholder="Password"></input>
        <button>Login</button>
      </form>
    </>
  );
}

export default Login;
