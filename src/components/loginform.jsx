import React from 'react';

const LoginForm = () => {
    return (
    <div className="wrapper fadeInDown">
  <div id="formContent">

    <div className="fadeIn first">
        <br/><h3>Connexion</h3>
    </div>

    <form>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="Login"></input>
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password"></input>
      <input type="submit" className="fadeIn fourth" value="Log In"></input>
    </form>

  

  </div>
</div> )
}
export default LoginForm;