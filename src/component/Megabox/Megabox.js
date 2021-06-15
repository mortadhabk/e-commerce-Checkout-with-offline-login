import { Link } from "@material-ui/core";
import React from "react";
import logo from "../../images/woman.jpg";
import { withRouter } from "react-router-dom";
function Megabox({ category, history }) {
  console.log(category);
  return (
    <div className="mega-box">
      <div className="content">
        <div className="row">
          <img src={logo} alt="" />
        </div>
        {category.map((item) => (
          <div className="row" key={item.id}>
            <header>{item.name}</header>
            <ul className="mega-links">
              {item.children.map((subitem) => (
                <li key={subitem.id}>
                  <a
                    onClick={() => {
                      history.push(`/category/${subitem.id}`);
                    }}
                  >
                    {subitem.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withRouter(Megabox);
