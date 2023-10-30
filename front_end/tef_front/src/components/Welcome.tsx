// import { useState } from "react";
import logo from "../static/images/o2.png";
import { Button } from "semantic-ui-react";

function Welcome() {
  return (
    <>
      <div className="ui menu">
        <h4 className="ui header item">
          <img className="ui image mini" src={logo} />
          <a style={{ color: "#2185D0;text-decoration:none" }} href="">
            Telefónica - Azure Cloud Spaces
          </a>
        </h4>
      </div>

      <div className="ui container">
        <br />

        <form className="ui form segment blue">
          <h2 className="ui header">Welcome</h2>
          <h4 className="ui header">
            Click the below button to login with your telefonica microsoft
            account
          </h4>

          <Button className="ui left labeled icon primary button">
            <i className="microsoft icon"></i>
            Login with microsoft
          </Button>
        </form>

        <div className="ui segmant blue">
          For any questions send an email to{" "}
          <a style={{ color: "#2185D0", textDecoration: "none" }}>
            <i>email@telefonica.com</i>
          </a>
        </div>
        <br />
      </div>
    </>
  );
}

export default Welcome;
