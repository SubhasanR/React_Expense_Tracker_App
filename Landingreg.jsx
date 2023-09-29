import React from "react";
import { NavLink } from "react-router-dom";
import MainExpenseLogo from "../../assets/MainExpenseLogo";
import './Landingreg.css'

const Landingreg = () => {
  return (
    <div className="home">
      <div id="login-page">
        <div class="login">
          <h2 class="login-title-head">Expense Tracker</h2>
          <h2 class="login-title">Login</h2>
          <form class="form-login">
            <label for="email">E-mail</label>
            <div class="input-email">
              <i class="fas fa-envelope icon"></i>
              <input type="email" name="email" placeholder="Enter your e-mail" required />
            </div>
            <label for="password">Password</label>
            <div class="input-password">
              <i class="fas fa-lock icon"></i>
              <input type="password" name="password" placeholder="Enter your password" required />
            </div>

            <label for="password">Confirm Password</label>
            <div class="input-password">
              <i class="fas fa-lock icon"></i>
              <input type="password" name="password" placeholder="Renter your password" required />
            </div>
            <NavLink to="/" ><button type="submit"><i class="fas fa-door-open"></i> Sign Up</button></NavLink>
          </form>
          <a href="#">Forgot your password?</a>
          <div class="created">
          </div>
        </div>

        <div className="header">
        </div>
        <div className="main">

          <div className="home-content">
            <h1 className="home-content-title">Track Your Expenses with Our App </h1>
            <h1 className="home-content-title">Simplify Your <span className="hightlight">Finances</span></h1>
            <p className="home-content-subtitle">An expense tracker app is a powerful tool that can help you take control of your finances. With just a few taps, you can track all of your expenses, including your bills, groceries, entertainment, and more. </p>
            <p className="home-content-subtitle">This app can also help you set up a budget, monitor your spending, and alert you when you're close to reaching your limits. </p>
          </div>
          <div className="home-img">
            <MainExpenseLogo />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Landingreg;