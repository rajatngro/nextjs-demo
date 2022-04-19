import Head from "next/head";

function Register() {
  function handleSubmit() {
    window.alert("Register");
  }

  return (
    <>
      <Head>
        <title>Register Page</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <h2>Register Here</h2>
        <p>Email Address</p>
        <input type={"email"} placeholder="Email ID"></input>
        <p>Full Name</p>
        <input placeholder="Full Name"></input>
        <p>Password</p>
        <input type={"password"} placeholder="Password"></input>
        <button>Register</button>
      </form>
    </>
  );
}

export default Register;
