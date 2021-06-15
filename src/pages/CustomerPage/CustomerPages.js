import React from "react";
import CustomerMenu from "../../component/account/CustomerMenu";
import "./component.css";
import { connect } from "react-redux";

const CustomerPages = (props) => {
  const ContentComponent = props.content;
  return (
    <div className="CustomerPage">
      <div className="sidebar">
        <CustomerMenu />
      </div>
      <div className="content">
        <ContentComponent {...props} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerPages);
