import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Dashboard.css";
function Dashboard() {
  const customer = useSelector((state) => state.Auth.customer);
  return (
    <div>
      <section class="sectiondashboard">
        <div class="titre">
          <h2>My Account : </h2>
          <h4>Account information : </h4>
          <ul>
            <li>
              firstname : <span> {customer.firstname} </span>
            </li>
            <li>
              lastname : <span>{customer.lastname} </span>
            </li>
            <li>
              email : <span>{customer.email}</span>
            </li>
          </ul>
          <Link to="customer/account/edit">Edit</Link>
          <Link to="customer/account/changePassword">Change Password</Link>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

/* <h1>My Account</h1>
      <h3>Account information</h3>
      <raw>
        <div>
          <h4>Contact Information</h4>
          {customer.firstname} {customer.middlename} {customer.lastname}
          <br />
          {customer.email}
          <br />
          <Link to="customer/account/edit">Edit</Link> |
          <Link to="customer/account/changePassword">Change Password</Link>
        </div>
        <div>
          <h4>Newsletters</h4>
          <p>Not implemented yet</p>
        </div>
      </raw> */
