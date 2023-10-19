"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import Items from "../components/items";
import { useAuth } from "../auth/login";
import axios from "axios";
import logo  from '../images/logo.png'
import Image from "next/image";

const Main = () => {
  const [show, setShow] = useState(false);
  const [domain, setDomain] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [inputError, setInputError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginBtnVisible, setLoginBtnVisible] = useState(true);


  const auth = useAuth();

  const signIn = async (username, tokenid) => {
    const regex = /\.mmit$/;
    if (!regex.test(domain) || !domain || !tokenId) {
      setInputError("Please fill all the fields");
      return;
    }
    setLoading(true);
    let response;
    try {
      response = await axios.get(`/api/sdk`, {
        params: {
          username: username,
          id: tokenid
        }
      });
    } catch (error) {
      console.error(error);
    }
    const uservalidator = response?.data?.data
    if (uservalidator.success == true) {
      setLoginBtnVisible(false);
      handleClose()
      setLoading(false);
    }
    else {
      swal("Error", `${uservalidator.message}`, "error");
      setLoading(false);
    }
  };

  const onSubmit = async () => {
    auth.login({ domain, tokenId });
    signIn(domain, tokenId)
  };

  const logOutUser = () => {
    setLoginBtnVisible(true);
  };

  const handleClose = () => {
    setShow(false);
    setDomain("");
    setTokenId("");
  };

  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container-fluid ">
        <div className="myContainer">
          <h1 className="w-basic-heading heading-xlarge xxl red-color">
            <Image src={logo} alt="logo" style={{width: '200px', height: '40px'}}/>
            <br />
            <span className="text-color-gradient-blue">
              Crypto Price Ticker
            </span>
          </h1>
          <marquee direction="Left" className="marquee" scrollamount="6">
            <div className="abcd">
              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="DOGE"
                dot="• $0.06"
                percent="0.26%"
              />
              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/matic.svg"
                title="MATIC"
                dot="• $0.52"
                percent="1.26%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/btc.svg"
                title="BIT"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="MATIC"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="DOGE"
                dot="• $0.06"
                percent="0.26%"
              />
              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/matic.svg"
                title="MATIC"
                dot="• $0.52"
                percent="1.26%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/btc.svg"
                title="BIT"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="MATIC"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="DOGE"
                dot="• $0.06"
                percent="0.26%"
              />
              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/matic.svg"
                title="MATIC"
                dot="• $0.52"
                percent="1.26%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/btc.svg"
                title="BIT"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="MATIC"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="DOGE"
                dot="• $0.06"
                percent="0.26%"
              />
              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/matic.svg"
                title="MATIC"
                dot="• $0.52"
                percent="1.26%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/btc.svg"
                title="BIT"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="MATIC"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="DOGE"
                dot="• $0.06"
                percent="0.26%"
              />
              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/matic.svg"
                title="MATIC"
                dot="• $0.52"
                percent="1.26%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/btc.svg"
                title="BIT"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="MATIC"
                dot="• $0.52"
                percent="2.06%"
              />
            </div>
          </marquee>

          <div className="containerBtn">
            {loginBtnVisible ? (
              <Button className="login-btn" onClick={handleShow}>
                Login With MMIT Domain
              </Button>
            ) : (
              <>
                <Button className="login-btn" onClick={logOutUser}>
                  Logout
                </Button>
              </>
            )}
          </div>

          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="text-light">Insert Your MMIT Domain</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Domain"
                      onChange={(e) => {
                        setDomain(e.target.value);
                        setInputError("");
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="number"
                      placeholder="Token Id"
                      onChange={(e) => {
                        setTokenId(e.target.value);
                        setInputError("");
                      }}
                    />
                  </Form.Group>

                  <p className="text-danger my-2">{inputError}</p>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="dark" onClick={onSubmit}>
                  Login
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
