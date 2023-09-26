import { Avatar, Badge, Box, Flex, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp, FiCircle, FiHome } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
import ProgressBar from "@ramonak/react-progress-bar";
import Chart from "./Chart";
import DonutChart from "./DonutChart";
import { Link } from "react-router-dom";

const Home = () => {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    getNotices();
  }, []);

  const getNotices = () => {
    fetch("http://localhost:3000/noticeBoard.json")
      .then((res) => res.json())
      .then((data) => {
        setNotice(data?.notice);
      });
  };

  const [project, setProject] = useState([]);

  useEffect(() => {
    getProject();
  }, []);

  const getProject = () => {
    fetch("http://localhost:3000/projectStatus.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data?.project);
      });
  };

  const [earning, setEarning] = useState([]);

  useEffect(() => {
    getEarning();
  }, []);

  const getEarning = () => {
    fetch("http://localhost:3000/earningSource.json")
      .then((res) => res.json())
      .then((data) => {
        setEarning(data?.earning);
      });
  };

  const [leave, setLeave] = useState([]);

  useEffect(() => {
    getLeave();
  }, []);

  const getLeave = () => {
    fetch("http://localhost:3000/leaveRequest.json")
      .then((res) => res.json())
      .then((data) => {
        setLeave(data?.leave);
      });
  };

  return (
    <>
      <Box
        boxSizing="border-box"
        minHeight="calc(100vh - 60px)"
        bgColor={"#232B3E"}
        px={"10px"}
      >
        <Flex
          h={"100px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mx={"10px"}
        >
          <Box>
            <Box
              style={{
                boxSizing: "border-box",
                marginTop: "0px",
                lineHeight: 1.2,
                fontSize: "20px",
                fontWeight: 500,
                marginBottom: "0px",
                color: "rgb(165, 171, 177)",
              }}
            >
              Dashboard 
            </Box>
          </Box>

          <Flex>
            <Flex
              alignItems={"center"}
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                fontSize: "15px",
                color: "rgb(85, 85, 85)",
                paddingLeft: "5px",
              }}
            >
              <Box
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  color: "rgb(165, 171, 177)",
                }}
              >
                <Link to={"/"}><Icon as={FiHome} fontSize={"19px"}></Icon></Link>
              </Box>
              <Box mt={"5px"}>
                <Icon
                  color="rgb(165, 171, 177)"
                  as={BiChevronRight}
                  cursor={"pointer"}
                  fontSize={"17px"}
                  mx={"4px"}
                ></Icon>
              </Box>
              <Box
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  paddingLeft: "5px",
                  color: "rgb(165, 171, 177)",
                }}
              >
               <Link to={'/'}> Home </Link>
              </Box>
              <Box mt={"6px"}>
                <Icon
                  color="rgb(165, 171, 177)"
                  as={BiChevronRight}
                  cursor={"pointer"}
                  fontSize={"17px"}
                  mx={"4px"}
                ></Icon>
              </Box>
              <Box
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  paddingLeft: "5px",
                  color: "rgb(165, 171, 177)",
                }}
              >
                <Link to={'/'}> Dashboard</Link>
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <Box
            style={{
              boxSizing: "border-box",
              maxWidth: "100%",
              paddingRight: "calc(1.5rem * .5)",
              paddingLeft: "calc(1.5rem * .5)",
              marginTop: "0",
              flex: "0 0 auto",
              flexShrink: 0,
              width: "25%",
            }}
          >
            <Flex
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                minWidth: "0px",
                height: "var(--bs-card-height)",
                overflowWrap: "break-word",
                borderRadius: "10px",
                minHeight: "50px",
                position: "relative",
                marginBottom: "24px",
                border: "none",
                color: "rgb(150, 162, 180)",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
                background:
                  "linear-gradient(135deg, rgb(35, 189, 184) 0px, rgb(101, 169, 134) 100%)",
                backgroundClip: "initial",
                backgroundColor: "initial",
                alignItems: "flex-start",
              }}
            >
              <Box
                className="card-title"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  fontSize: "1.5rem",
                  marginBottom: ".5rem",
                  color: "white",
                  marginTop: "10px",
                  marginLeft: "12px",
                }}
              >
                New Projects
              </Box>

              <Box
                className="data-1"
                style={{
                  boxSizing: "border-box",
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "rgb(255, 255, 255)",
                  marginLeft: "12px",
                }}
              >
                102
              </Box>

              <Flex ml={"12px"} mt={"10px"}>
                <ProgressBar
                  width="200px"
                  height="4px"
                  bgColor="#FFC100"
                  isLabelVisible={false}
                  completed={60}
                ></ProgressBar>
              </Flex>
              <Flex
                className="mb-0 text-sm"
                style={{
                  boxSizing: "border-box",
                  color: "rgb(255, 255, 255)",
                }}
                alignItems={"center"}
                ml={"12px"}
                mt={"10px"}
                mb={"10px"}
              >
                <Icon as={FiArrowUp}></Icon>{" "}
                <Box className="mr-2" style={{ boxSizing: "border-box" }}>
                  10%
                </Box>
                <Box
                  className="text-nowrap"
                  style={{ boxSizing: "border-box", whiteSpace: "nowrap" }}
                  ml={"4px"}
                >
                  Since last month
                </Box>
              </Flex>
            </Flex>
          </Box>

          <Box
            style={{
              boxSizing: "border-box",
              maxWidth: "100%",
              paddingRight: "calc(1.5rem * .5)",
              paddingLeft: "calc(1.5rem * .5)",
              marginTop: "0",
              flex: "0 0 auto",
              flexShrink: 0,
              width: "25%",
            }}
          >
            <Flex
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                minWidth: "0px",
                height: "var(--bs-card-height)",
                overflowWrap: "break-word",
                borderRadius: "10px",
                minHeight: "50px",
                position: "relative",
                marginBottom: "24px",
                border: "none",
                color: "rgb(150, 162, 180)",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
                background:
                  "linear-gradient(135deg, rgb(40, 156, 245), rgb(79, 139, 183))",
                backgroundClip: "initial",
                backgroundColor: "initial",
                alignItems: "flex-start",
              }}
            >
              <Box
                className="card-title"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  fontSize: "1.5rem",
                  marginBottom: ".5rem",
                  color: "white",
                  marginTop: "10px",
                  marginLeft: "12px",
                }}
              >
                New Customers
              </Box>

              <Box
                className="data-1"
                style={{
                  boxSizing: "border-box",
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "rgb(255, 255, 255)",
                  marginLeft: "12px",
                }}
              >
                154
              </Box>

              <Flex ml={"12px"} mt={"10px"}>
                <ProgressBar
                  width="200px"
                  height="4px"
                  bgColor="#3F51B5"
                  isLabelVisible={false}
                  completed={60}
                ></ProgressBar>
              </Flex>
              <Flex
                className="mb-0 text-sm"
                style={{
                  boxSizing: "border-box",
                  color: "rgb(255, 255, 255)",
                }}
                alignItems={"center"}
                ml={"12px"}
                mt={"10px"}
                mb={"10px"}
              >
                <Icon as={FiArrowUp}></Icon>{" "}
                <Box className="mr-2" style={{ boxSizing: "border-box" }}>
                  04%
                </Box>
                <Box
                  style={{ boxSizing: "border-box", whiteSpace: "nowrap" }}
                  ml={"4px"}
                >
                  Since last month
                </Box>
              </Flex>
            </Flex>
          </Box>

          <Box
            style={{
              boxSizing: "border-box",
              maxWidth: "100%",
              paddingRight: "calc(1.5rem * .5)",
              paddingLeft: "calc(1.5rem * .5)",
              marginTop: "0",
              flex: "0 0 auto",
              flexShrink: 0,
              width: "25%",
            }}
          >
            <Flex
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                minWidth: "0px",
                height: "var(--bs-card-height)",
                overflowWrap: "break-word",
                borderRadius: "10px",
                minHeight: "50px",
                position: "relative",
                marginBottom: "24px",
                border: "none",
                color: "rgb(150, 162, 180)",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
                background:
                  "linear-gradient(135deg, rgb(142, 76, 241) 0px, rgb(197, 84, 188) 100%)",
                backgroundClip: "initial",
                backgroundColor: "initial",
                alignItems: "flex-start",
              }}
            >
              <Box
                className="card-title"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  fontSize: "1.5rem",
                  marginBottom: ".5rem",
                  color: "white",
                  marginTop: "10px",
                  marginLeft: "12px",
                }}
              >
                Inquiry
              </Box>

              <Box
                className="data-1"
                style={{
                  boxSizing: "border-box",
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "rgb(255, 255, 255)",
                  marginLeft: "12px",
                }}
              >
                524
              </Box>

              <Flex ml={"12px"} mt={"10px"}>
                <ProgressBar
                  width="200px"
                  height="4px"
                  bgColor="#0AF30A"
                  isLabelVisible={false}
                  completed={60}
                ></ProgressBar>
              </Flex>
              <Flex
                className="mb-0 text-sm"
                style={{
                  boxSizing: "border-box",
                  color: "rgb(255, 255, 255)",
                }}
                alignItems={"center"}
                ml={"12px"}
                mt={"10px"}
                mb={"10px"}
              >
                <Icon as={FiArrowUp}></Icon>{" "}
                <Box className="mr-2" style={{ boxSizing: "border-box" }}>
                  23%
                </Box>
                <Box
                  style={{ boxSizing: "border-box", whiteSpace: "nowrap" }}
                  ml={"4px"}
                >
                  Since last month
                </Box>
              </Flex>
            </Flex>
          </Box>

          <Box
            style={{
              boxSizing: "border-box",
              maxWidth: "100%",
              paddingRight: "calc(1.5rem * .5)",
              paddingLeft: "calc(1.5rem * .5)",
              marginTop: "0",
              flex: "0 0 auto",
              flexShrink: 0,
              width: "25%",
            }}
          >
            <Flex
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                minWidth: "0px",
                height: "var(--bs-card-height)",
                overflowWrap: "break-word",
                borderRadius: "10px",
                minHeight: "50px",
                position: "relative",
                marginBottom: "24px",
                border: "none",
                color: "rgb(150, 162, 180)",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
                background:
                  "linear-gradient(135deg, rgb(244, 134, 101) 0px, rgb(214, 142, 65) 100%)",
                backgroundClip: "initial",
                backgroundColor: "initial",
                alignItems: "flex-start",
              }}
            >
              <Box
                className="card-title"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  fontSize: "1.5rem",
                  marginBottom: ".5rem",
                  color: "white",
                  marginTop: "10px",
                  marginLeft: "12px",
                }}
              >
                Earning
              </Box>

              <Box
                className="data-1"
                style={{
                  boxSizing: "border-box",
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "rgb(255, 255, 255)",
                  marginLeft: "12px",
                }}
              >
                $2,453
              </Box>

              <Flex ml={"12px"} mt={"10px"}>
                <ProgressBar
                  width="200px"
                  height="4px"
                  bgColor="#248AFD"
                  isLabelVisible={false}
                  completed={60}
                ></ProgressBar>
              </Flex>
              <Flex
                className="mb-0 text-sm"
                style={{
                  boxSizing: "border-box",
                  color: "rgb(255, 255, 255)",
                }}
                alignItems={"center"}
                ml={"12px"}
                mt={"10px"}
                mb={"10px"}
              >
                <Icon as={FiArrowDown}></Icon>{" "}
                <Box className="mr-2" style={{ boxSizing: "border-box" }}>
                  0.6%
                </Box>
                <Box
                  style={{ boxSizing: "border-box", whiteSpace: "nowrap" }}
                  ml={"4px"}
                >
                  Since last month
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>

        <Flex>
          <div
            className="col-xl-8 col-lg-8 col-md-12 col-sm-12"
            style={{
              boxSizing: "border-box",
              maxWidth: "100%",
              paddingRight: "calc(1.5rem * .5)",
              paddingLeft: "calc(1.5rem * .5)",
              marginTop: "0",
              flex: "0 0 auto",
              flexShrink: 0,
              width: "66.6667%",
            }}
          >
            <div
              className="card"
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                minWidth: "0px",
                // height: "var(--bs-card-height)",
                height: "468.188px",
                overflowWrap: "break-word",
                borderRadius: "10px",
                minHeight: "50px",
                position: "relative",
                marginBottom: "24px",
                background: "rgb(26, 32, 46)",
                border: "none",
                backgroundClip: "initial",
                backgroundColor: "rgb(26, 32, 46)",
                color: "rgb(150, 162, 180)",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
              }}
            >
              <div
                className="header"
                style={{
                  boxSizing: "border-box",
                  flex: "0 1 auto",
                  background:
                    "linear-gradient(to top,var(--color-purple-heart),var(--color-purple-heart-light))",
                  padding: "10px 15px",
                  position: "relative",
                  display: "flex",
                  width: "100%",
                  lineHeight: "30px",
                  color: "rgb(150, 162, 180)",
                }}
              >
                <h2
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "17px",
                    lineHeight: "28px",
                    paddingRight: "10px",
                    fontWeight: 500,
                    color: "rgb(150, 162, 180)",
                  }}
                >
                  Employee Performance
                </h2>
              </div>
              <div
                className="body"
                style={{
                  boxSizing: "border-box",
                  padding: "15px",
                  fontSize: "14px",
                  color: "rgb(150, 162, 180)",
                }}
              >
                <div
                  className="recent-report__chart"
                  style={{ boxSizing: "border-box" }}
                >
                  <Chart />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12"
            style={{
              boxSizing: "border-box",
              maxWidth: "100%",
              paddingRight: "calc(1.5rem * .5)",
              paddingLeft: "calc(1.5rem * .5)",
              marginTop: "0",
              flex: "0 0 auto",
              flexShrink: 0,
              width: "33.3333%",
              height: "468.188px",
            }}
          >
            <div
              className="card"
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                minWidth: "0px",
                // height: "var(--bs-card-height)",
                height: "468.188px",
                overflowWrap: "break-word",
                borderRadius: "10px",
                minHeight: "50px",
                position: "relative",
                marginBottom: "24px",
                background: "rgb(26, 32, 46)",
                border: "none",
                backgroundClip: "initial",
                backgroundColor: "rgb(26, 32, 46)",
                color: "rgb(150, 162, 180)",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
              }}
            >
              <div
                className="header"
                style={{
                  boxSizing: "border-box",
                  flex: "0 1 auto",
                  background:
                    "linear-gradient(to top,var(--color-purple-heart),var(--color-purple-heart-light))",
                  padding: "10px 15px",
                  position: "relative",
                  display: "flex",
                  width: "100%",
                  lineHeight: "30px",
                  color: "rgb(150, 162, 180)",
                }}
              >
                <h2
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "17px",
                    lineHeight: "28px",
                    paddingRight: "10px",
                    fontWeight: 500,
                    color: "rgb(150, 162, 180)",
                  }}
                >
                  Country Wise Clients
                </h2>
              </div>
              <div
                className="body"
                style={{
                  boxSizing: "border-box",
                  padding: "15px",
                  fontSize: "14px",
                  color: "rgb(150, 162, 180)",
                }}
              >
                <div id="chart" style={{ boxSizing: "border-box" }}>
                  <DonutChart />
                </div>
                <div
                  className="table-responsive m-t-15"
                  style={{
                    boxSizing: "border-box",
                    overflowX: "auto",
                    marginTop: "15px",
                  }}
                >
                  <table
                    className="table align-items-center"
                    style={{
                      boxSizing: "border-box",
                      captionSide: "bottom",
                      borderCollapse: "collapse",
                      borderColor: "#dee2e6",
                      width: "100%",
                      marginBottom: "1rem",
                      verticalAlign: "top",
                      color: "rgb(150, 162, 180)",
                      alignItems: "center",
                    }}
                  >
                    <tbody
                      style={{
                        boxSizing: "border-box",
                        borderColor: "inherit",
                        borderStyle: "solid",
                        borderWidth: "0px",
                        verticalAlign: "inherit",
                        borderTop: "none",
                      }}
                    >
                      <tr
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          color: "rgb(150, 162, 180)",
                        }}
                      >
                        <td
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            boxShadow:
                              "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                            padding: "10px",
                            verticalAlign: "middle",
                            borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            borderBottomWidth: "1px",
                            color: "rgb(150, 162, 180)",
                            backgroundColor: "rgb(26, 32, 46)",
                          }}
                        >
                          <Icon
                            as={FiCircle}
                            style={{
                              boxSizing: "border-box",
                              fontVariant: "normal",
                              // WebkitFontSmoothing: "antialiased",
                              display: "inline-block",
                              fontStyle: "normal",
                              textRendering: "auto",
                              lineHeight: 1,
                              fontFamily: '"Font Awesome 5 Free"',
                              fontWeight: 900,
                              marginRight: "0.5rem",
                              color: "#008FFB",
                            }}
                          />{" "}
                          India
                        </td>
                        <td
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            boxShadow:
                              "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                            padding: "10px",
                            verticalAlign: "middle",
                            borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            borderBottomWidth: "1px",
                            color: "rgb(150, 162, 180)",
                            backgroundColor: "rgb(26, 32, 46)",
                          }}
                        >
                          23
                        </td>
                        <td
                          className="col-green"
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            boxShadow:
                              "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                            padding: "10px",
                            verticalAlign: "middle",
                            borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            borderBottomWidth: "1px",
                            backgroundColor: "rgb(26, 32, 46)",
                            color: "rgb(76, 175, 80)",
                          }}
                        >
                          +32%
                        </td>
                      </tr>
                      <tr
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          color: "rgb(150, 162, 180)",
                        }}
                      >
                        <td
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            boxShadow:
                              "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                            padding: "10px",
                            verticalAlign: "middle",
                            borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            borderBottomWidth: "1px",
                            color: "rgb(150, 162, 180)",
                            backgroundColor: "rgb(26, 32, 46)",
                          }}
                        >
                          <Icon
                            as={FiCircle}
                            style={{
                              boxSizing: "border-box",
                              fontVariant: "normal",
                              WebkitFontSmoothing: "antialiased",
                              display: "inline-block",
                              fontStyle: "normal",
                              textRendering: "auto",
                              lineHeight: 1,
                              fontFamily: '"Font Awesome 5 Free"',
                              fontWeight: 900,
                              marginRight: "0.5rem",
                              color: "rgb(33, 150, 243)",
                            }}
                          />
                          USA
                        </td>
                        <td
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            boxShadow:
                              "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                            padding: "10px",
                            verticalAlign: "middle",
                            borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            borderBottomWidth: "1px",
                            color: "rgb(150, 162, 180)",
                            backgroundColor: "rgb(26, 32, 46)",
                          }}
                        >
                          32
                        </td>
                        <td
                          className="col-green"
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            boxShadow:
                              "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                            padding: "10px",
                            verticalAlign: "middle",
                            borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            borderBottomWidth: "1px",
                            backgroundColor: "rgb(26, 32, 46)",
                            color: "rgb(76, 175, 80)",
                          }}
                        >
                          +12%
                        </td>
                      </tr>
                      <tr
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          color: "rgb(150, 162, 180)",
                        }}
                      >
                        <td
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            boxShadow:
                              "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                            padding: "10px",
                            verticalAlign: "middle",
                            borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            borderBottomWidth: "1px",
                            color: "rgb(150, 162, 180)",
                            backgroundColor: "rgb(26, 32, 46)",
                          }}
                        >
                          <Icon
                            as={FiCircle}
                            style={{
                              boxSizing: "border-box",
                              fontVariant: "normal",
                              WebkitFontSmoothing: "antialiased",
                              display: "inline-block",
                              fontStyle: "normal",
                              textRendering: "auto",
                              lineHeight: 1,
                              fontFamily: '"Font Awesome 5 Free"',
                              fontWeight: 900,
                              marginRight: "0.5rem",
                              color: "rgb(255, 152, 0)",
                            }}
                          />
                          Shrilanka
                        </td>
                        <td
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            boxShadow:
                              "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                            padding: "10px",
                            verticalAlign: "middle",
                            borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            borderBottomWidth: "1px",
                            color: "rgb(150, 162, 180)",
                            backgroundColor: "rgb(26, 32, 46)",
                          }}
                        >
                          12
                        </td>
                        <td
                          className="col-orange"
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            boxShadow:
                              "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                            padding: "10px",
                            verticalAlign: "middle",
                            borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            borderBottomWidth: "1px",
                            backgroundColor: "rgb(26, 32, 46)",
                            color: "rgb(255, 152, 0)",
                          }}
                        >
                          -12%
                        </td>
                      </tr>
                      <tr
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          color: "rgb(150, 162, 180)",
                        }}
                      >
                        <td
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            boxShadow:
                              "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                            padding: "10px",
                            verticalAlign: "middle",
                            borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            borderBottomWidth: "1px",
                            color: "rgb(150, 162, 180)",
                            backgroundColor: "rgb(26, 32, 46)",
                          }}
                        >
                          <Icon
                            as={FiCircle}
                            style={{
                              boxSizing: "border-box",
                              fontVariant: "normal",
                              WebkitFontSmoothing: "antialiased",
                              display: "inline-block",
                              fontStyle: "normal",
                              textRendering: "auto",
                              lineHeight: 1,
                              fontFamily: '"Font Awesome 5 Free"',
                              fontWeight: 900,
                              marginRight: "0.5rem",
                              color: "rgb(76, 175, 80)",
                            }}
                          />
                          Australia
                        </td>
                        <td
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            boxShadow:
                              "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                            padding: "10px",
                            verticalAlign: "middle",
                            borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            borderBottomWidth: "1px",
                            color: "rgb(150, 162, 180)",
                            backgroundColor: "rgb(26, 32, 46)",
                          }}
                        >
                          32
                        </td>
                        <td
                          className="col-green"
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            boxShadow:
                              "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                            padding: "10px",
                            verticalAlign: "middle",
                            borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            borderBottomWidth: "1px",
                            backgroundColor: "rgb(26, 32, 46)",
                            color: "rgb(76, 175, 80)",
                          }}
                        >
                          +3%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Flex>

        <Flex>
          <div
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
            style={{
              boxSizing: "border-box",
              maxWidth: "100%",
              paddingRight: "calc(1.5rem * .5)",
              paddingLeft: "calc(1.5rem * .5)",
              marginTop: "0",
              flex: "0 0 auto",
              flexShrink: 0,
              width: "33.3333%",
            }}
          >
            <div
              className="card"
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                minWidth: "0px",
                height: "var(--bs-card-height)",
                overflowWrap: "break-word",
                borderRadius: "10px",
                minHeight: "50px",
                position: "relative",
                marginBottom: "24px",
                background: "rgb(26, 32, 46)",
                border: "none",
                backgroundClip: "initial",
                backgroundColor: "rgb(26, 32, 46)",
                color: "rgb(150, 162, 180)",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
              }}
            >
              <div
                className="header"
                style={{
                  boxSizing: "border-box",
                  flex: "0 1 auto",
                  background:
                    "linear-gradient(to top,var(--color-purple-heart),var(--color-purple-heart-light))",
                  padding: "10px 15px",
                  position: "relative",
                  display: "flex",
                  width: "100%",
                  lineHeight: "30px",
                  color: "rgb(150, 162, 180)",
                }}
              >
                <h2
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "17px",
                    lineHeight: "28px",
                    paddingRight: "10px",
                    fontWeight: 500,
                    color: "rgb(150, 162, 180)",
                  }}
                >
                  Notice Board
                </h2>
              </div>

              <Box
                h={"410px"}
                overflowY={"scroll"}
                sx={{
                  // Style the scrollbar
                  "::-webkit-scrollbar": {
                    width: "4px", // Width of the scrollbar
                  },
                  "::-webkit-scrollbar-track": {
                    background: "transparent", // Track background color
                  },
                  "::-webkit-scrollbar-thumb": {
                    background: "#151A25", // Scrollbar thumb color
                    borderRadius: "4px", // Make the scrollbar thumb round
                  },
                }}
              >
                {notice?.map((item, index) => (
                  <div
                    className="notice-board"
                    key={index}
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "flex-start",
                      // justifyContent:"space-between",
                      // width:"100%"
                      marginTop: "15px",
                    }}
                  >
                    <div
                      style={{ boxSizing: "border-box", marginLeft: "15px" }}
                    >
                      <Avatar
                        alt="..."
                        src={item?.picture}
                        style={{
                          boxSizing: "border-box",
                          border: "2px solid rgb(240, 243, 251)",
                          height: "40px",
                          width: "40px",
                        }}
                      />
                    </div>
                    <div
                      className="notice-body"
                      style={{
                        boxSizing: "border-box",
                        padding: "0px 0px 5px 10px",
                        fontSize: "13px",
                      }}
                    >
                      <h6
                        className="notice-heading col-green"
                        style={{
                          boxSizing: "border-box",
                          fontWeight: 500,
                          lineHeight: 1.2,
                          fontSize: "1rem",
                          margin: "5px 0px 0px",
                          marginTop: "5px",
                          marginBottom: "0px",
                          color: "rgb(76, 175, 80)",
                        }}
                      >
                        {item?.name}
                      </h6>
                      <p
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          marginBottom: "0px",
                        }}
                      >
                        {item?.description}
                      </p>
                      <small
                        className="text-muted"
                        style={{
                          boxSizing: "border-box",
                          fontSize: "0.875em",
                          marginBottom: "10px",
                          color: "rgb(150, 162, 180)",
                        }}
                      >
                        {item?.time}
                      </small>
                    </div>
                  </div>
                ))}
              </Box>
            </div>
          </div>

          <div
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
            style={{
              boxSizing: "border-box",
              maxWidth: "100%",
              paddingRight: "calc(1.5rem * .5)",
              paddingLeft: "calc(1.5rem * .5)",
              marginTop: "0",
              flex: "0 0 auto",
              flexShrink: 0,
              width: "33.3333%",
            }}
          >
            <div
              className="card"
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                minWidth: "0px",
                height: "var(--bs-card-height)",
                overflowWrap: "break-word",
                borderRadius: "10px",
                minHeight: "50px",
                position: "relative",
                marginBottom: "24px",
                background: "rgb(26, 32, 46)",
                border: "none",
                backgroundClip: "initial",
                backgroundColor: "rgb(26, 32, 46)",
                color: "rgb(150, 162, 180)",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
              }}
            >
              <div
                className="header"
                style={{
                  boxSizing: "border-box",
                  flex: "0 1 auto",
                  background:
                    "linear-gradient(to top,var(--color-purple-heart),var(--color-purple-heart-light))",
                  padding: "10px 15px",
                  position: "relative",
                  display: "flex",
                  width: "100%",
                  lineHeight: "30px",
                  color: "rgb(150, 162, 180)",
                }}
              >
                <h2
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "17px",
                    lineHeight: "28px",
                    paddingRight: "10px",
                    fontWeight: 500,
                    color: "rgb(150, 162, 180)",
                  }}
                >
                  Notice Board
                </h2>
              </div>

              <Box
                h={"410px"}
                overflowY={"scroll"}
                sx={{
                  // Style the scrollbar
                  "::-webkit-scrollbar": {
                    width: "4px", // Width of the scrollbar
                  },
                  "::-webkit-scrollbar-track": {
                    background: "transparent", // Track background color
                  },
                  "::-webkit-scrollbar-thumb": {
                    background: "#151A25", // Scrollbar thumb color
                    borderRadius: "4px", // Make the scrollbar thumb round
                  },
                }}
              >
                <div
                  className="ng-scroll-content"
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    minWidth: "100%",
                  }}
                >
                  <div
                    className="tableBody"
                    style={{
                      boxSizing: "border-box",
                      padding: "0px 15px",
                      fontSize: "14px",
                      color: "rgb(150, 162, 180)",
                    }}
                  >
                    <div
                      className="table-responsive"
                      style={{ boxSizing: "border-box", overflowX: "auto" }}
                    >
                      <table
                        className="table table-hover"
                        style={{
                          boxSizing: "border-box",
                          captionSide: "bottom",
                          borderCollapse: "collapse",
                          borderColor: "#dee2e6",
                          width: "100%",
                          marginBottom: "1rem",
                          verticalAlign: "top",
                          color: "rgb(150, 162, 180)",
                        }}
                      >
                        <thead
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            verticalAlign: "bottom",
                          }}
                        >
                          <tr
                            style={{
                              boxSizing: "border-box",
                              borderColor: "inherit",
                              borderStyle: "solid",
                              borderWidth: "0px",
                              color: "rgb(150, 162, 180)",
                            }}
                          >
                            <th
                              style={{
                                boxSizing: "border-box",
                                textAlign: "-webkit-match-parent",
                                borderColor: "inherit",
                                borderStyle: "solid",
                                borderWidth: "0px",
                                boxShadow:
                                  "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                                padding: "0px 10px",
                                border: "none",
                                height: "50px",
                                verticalAlign: "middle",
                                fontWeight: 500,
                                borderBottom: "1px solid rgb(21, 24, 29)",
                                borderTop: "1px solid rgb(21, 24, 29)",
                                borderBottomWidth: "1px",
                                backgroundColor: "rgb(21, 24, 29)",
                                color: "rgb(171, 170, 170)",
                              }}
                            >
                              Project Name
                            </th>
                            <th
                              style={{
                                boxSizing: "border-box",
                                textAlign: "-webkit-match-parent",
                                borderColor: "inherit",
                                borderStyle: "solid",
                                borderWidth: "0px",
                                boxShadow:
                                  "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                                padding: "0px 10px",
                                border: "none",
                                height: "50px",
                                verticalAlign: "middle",
                                fontWeight: 500,
                                borderBottom: "1px solid rgb(21, 24, 29)",
                                borderTop: "1px solid rgb(21, 24, 29)",
                                borderBottomWidth: "1px",
                                backgroundColor: "rgb(21, 24, 29)",
                                color: "rgb(171, 170, 170)",
                              }}
                            >
                              Progress
                            </th>
                            <th
                              style={{
                                boxSizing: "border-box",
                                textAlign: "-webkit-match-parent",
                                borderColor: "inherit",
                                borderStyle: "solid",
                                borderWidth: "0px",
                                boxShadow:
                                  "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                                padding: "0px 10px",
                                border: "none",
                                height: "50px",
                                verticalAlign: "middle",
                                fontWeight: 500,
                                borderBottom: "1px solid rgb(21, 24, 29)",
                                borderTop: "1px solid rgb(21, 24, 29)",
                                borderBottomWidth: "1px",
                                backgroundColor: "rgb(21, 24, 29)",
                                color: "rgb(171, 170, 170)",
                              }}
                            >
                              Duration
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            verticalAlign: "inherit",
                            borderTop: "none",
                          }}
                        >
                          {project?.map((item, index) => (
                            <tr
                              style={{
                                boxSizing: "border-box",
                                borderColor: "inherit",
                                borderStyle: "solid",
                                borderWidth: "0px",
                                color: "rgb(150, 162, 180)",
                              }}
                              key={index}
                            >
                              <td
                                style={{
                                  boxSizing: "border-box",
                                  borderColor: "inherit",
                                  borderStyle: "solid",
                                  borderWidth: "0px",
                                  boxShadow:
                                    "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                                  padding: "10px",
                                  verticalAlign: "middle",
                                  borderTop:
                                    "1px solid rgba(120, 130, 140, 0.5)",
                                  borderBottom:
                                    "1px solid rgba(255, 255, 255, 0.1)",
                                  borderBottomWidth: "1px",
                                  color: "rgb(150, 162, 180)",
                                  backgroundColor: "rgb(26, 32, 46)",
                                }}
                              >
                                {item?.projectName}
                              </td>
                              <td
                                style={{
                                  boxSizing: "border-box",
                                  borderColor: "inherit",
                                  borderStyle: "solid",
                                  borderWidth: "0px",
                                  boxShadow:
                                    "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                                  padding: "10px",
                                  verticalAlign: "middle",
                                  borderTop:
                                    "1px solid rgba(120, 130, 140, 0.5)",
                                  borderBottom:
                                    "1px solid rgba(255, 255, 255, 0.1)",
                                  borderBottomWidth: "1px",
                                  color: "rgb(150, 162, 180)",
                                  backgroundColor: "rgb(26, 32, 46)",
                                }}
                              >
                                {item?.progress}
                                <ProgressBar
                                  width="67.8125px"
                                  height="4px"
                                  bgColor="#3F51B5"
                                  isLabelVisible={false}
                                  completed={item?.progressBar}
                                ></ProgressBar>
                              </td>
                              <td
                                style={{
                                  boxSizing: "border-box",
                                  borderColor: "inherit",
                                  borderStyle: "solid",
                                  borderWidth: "0px",
                                  boxShadow:
                                    "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                                  padding: "10px",
                                  verticalAlign: "middle",
                                  borderTop:
                                    "1px solid rgba(120, 130, 140, 0.5)",
                                  borderBottom:
                                    "1px solid rgba(255, 255, 255, 0.1)",
                                  borderBottomWidth: "1px",
                                  color: "rgb(150, 162, 180)",
                                  backgroundColor: "rgb(26, 32, 46)",
                                }}
                              >
                                {item?.duration}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          </div>

          <div
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
            style={{
              boxSizing: "border-box",
              maxWidth: "100%",
              paddingRight: "calc(1.5rem * .5)",
              paddingLeft: "calc(1.5rem * .5)",
              marginTop: "0",
              flex: "0 0 auto",
              flexShrink: 0,
              width: "33.3333%",
            }}
          >
            <div
              className="card"
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                minWidth: "0px",
                height: "var(--bs-card-height)",
                overflowWrap: "break-word",
                borderRadius: "10px",
                minHeight: "50px",
                position: "relative",
                marginBottom: "24px",
                background: "rgb(26, 32, 46)",
                border: "none",
                backgroundClip: "initial",
                backgroundColor: "rgb(26, 32, 46)",
                color: "rgb(150, 162, 180)",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
              }}
            >
              <div
                className="header"
                style={{
                  boxSizing: "border-box",
                  flex: "0 1 auto",
                  background:
                    "linear-gradient(to top,var(--color-purple-heart),var(--color-purple-heart-light))",
                  padding: "10px 15px",
                  position: "relative",
                  display: "flex",
                  width: "100%",
                  lineHeight: "30px",
                  color: "rgb(150, 162, 180)",
                }}
              >
                <h2
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "17px",
                    lineHeight: "28px",
                    paddingRight: "10px",
                    fontWeight: 500,
                    color: "rgb(150, 162, 180)",
                  }}
                >
                  Earning Source
                </h2>
              </div>

              <Box h={"410px"}>
                <div
                  className="body"
                  style={{
                    boxSizing: "border-box",
                    padding: "15px",
                    fontSize: "14px",
                    color: "rgb(150, 162, 180)",
                  }}
                >
                  <div
                    className="totalEarning"
                    style={{
                      boxSizing: "border-box",
                      padding: "6px",
                      textAlign: "center",
                      color: "rgb(255, 152, 0)",
                    }}
                  >
                    <h2
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        marginBottom: "0.5rem",
                        fontWeight: 500,
                        lineHeight: 1.2,
                        color: "var(--bs-heading-color)",
                        fontSize: "2rem",
                      }}
                    >
                      $90,808
                    </h2>
                  </div>

                  <div
                    id="skills"
                    className="tab-pane body"
                    style={{
                      boxSizing: "border-box",
                      padding: "15px",
                      fontSize: "14px",
                      color: "rgb(150, 162, 180)",
                    }}
                  >
                    {earning?.map((item, index) => (
                      <Box
                        className="list-unstyled"
                        key={index}
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          marginBottom: "1rem",
                          listStyle: "none",
                          paddingLeft: "0px",
                          listStyleType: "none",
                        }}
                      >
                        <Box style={{ boxSizing: "border-box" }}>
                          <Flex
                            className="mb-2"
                            justifyContent={"space-between"}
                            style={{
                              boxSizing: "border-box",
                              marginBottom: "0.5rem",
                            }}
                          >
                            <Box
                              className="progress-label"
                              style={{ boxSizing: "border-box" }}
                            >
                              {item?.sourceName}
                            </Box>
                            <Box
                              className="float-end progress-percent label label-info m-b-5"
                              style={{
                                boxSizing: "border-box",
                                borderRadius: "10px",
                                padding: "2px 10px",
                                color: "rgb(255, 255, 255)",
                                display: "inline-block",
                                backgroundColor: "rgb(0, 176, 228)",
                                cssFloat: "right",
                              }}
                            >
                              {item?.progress}
                            </Box>
                          </Flex>
                          <ProgressBar
                            width="270px"
                            height="10px"
                            bgColor="linear-gradient(135deg, rgb(35, 189, 184) 0%, rgb(67, 231, 148) 100%)"
                            isLabelVisible={false}
                            completed={item?.progressBar}
                          ></ProgressBar>
                        </Box>
                      </Box>
                    ))}
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </Flex>

        <Flex w={"100%"}>
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              // flexWrap: "wrap",
              marginTop: "calc(-1 * 0)",
              marginRight: "calc(-.5 * 1.5rem)",
              marginLeft: "calc(-.5 * 1.5rem)",
              marginBottom: "0px",
              // paddingRight: "calc(1.5rem * .5)",
              paddingLeft: "calc(1.5rem * .5)",
              width: "100%",
            }}
          >
            <div
              className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                // paddingRight: "calc(1.5rem * .5)",
                paddingLeft: "calc(1.5rem * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "100%",
              }}
            >
              <div
                className="card"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  minWidth: "0px",
                  height: "var(--bs-card-height)",
                  overflowWrap: "break-word",
                  borderRadius: "10px",
                  minHeight: "50px",
                  position: "relative",
                  marginBottom: "24px",
                  background: "rgb(26, 32, 46)",
                  border: "none",
                  backgroundClip: "initial",
                  backgroundColor: "rgb(26, 32, 46)",
                  color: "rgb(150, 162, 180)",
                  boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
                }}
              >
                <div
                  className="header"
                  style={{
                    boxSizing: "border-box",
                    flex: "0 1 auto",
                    background:
                      "linear-gradient(to top,var(--color-purple-heart),var(--color-purple-heart-light))",
                    padding: "10px 15px",
                    position: "relative",
                    display: "flex",
                    width: "100%",
                    lineHeight: "30px",
                    color: "rgb(150, 162, 180)",
                  }}
                >
                  <h2
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontSize: "17px",
                      lineHeight: "28px",
                      paddingRight: "10px",
                      fontWeight: 500,
                      color: "rgb(150, 162, 180)",
                    }}
                  >
                    Leave Requests
                  </h2>
                </div>
                <div
                  className="tableBody"
                  style={{
                    boxSizing: "border-box",
                    padding: "0px 15px",
                    fontSize: "14px",
                    color: "rgb(150, 162, 180)",
                  }}
                >
                  <div
                    className="table-responsive"
                    style={{ boxSizing: "border-box", overflowX: "auto" }}
                  >
                    <table
                      id="support_table"
                      className="table display product-overview mb-30"
                      style={{
                        boxSizing: "border-box",
                        captionSide: "bottom",
                        borderCollapse: "collapse",
                        borderColor: "#dee2e6",
                        width: "100%",
                        marginBottom: "1rem",
                        verticalAlign: "top",
                        color: "rgb(150, 162, 180)",
                      }}
                    >
                      <thead
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          verticalAlign: "bottom",
                        }}
                      >
                        <tr
                          style={{
                            boxSizing: "border-box",
                            borderColor: "inherit",
                            borderStyle: "solid",
                            borderWidth: "0px",
                            color: "rgb(150, 162, 180)",
                          }}
                        >
                          <th
                            style={{
                              boxSizing: "border-box",
                              textAlign: "-webkit-match-parent",
                              borderColor: "inherit",
                              borderStyle: "solid",
                              borderWidth: "0px",
                              boxShadow:
                                "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                              padding: "0px 10px",
                              border: "none",
                              height: "50px",
                              verticalAlign: "middle",
                              fontWeight: 500,
                              borderBottom: "1px solid rgb(21, 24, 29)",
                              borderTop: "1px solid rgb(21, 24, 29)",
                              borderBottomWidth: "1px",
                              backgroundColor: "rgb(21, 24, 29)",
                              color: "rgb(171, 170, 170)",
                            }}
                          >
                            ID
                          </th>
                          <th
                            style={{
                              boxSizing: "border-box",
                              textAlign: "-webkit-match-parent",
                              borderColor: "inherit",
                              borderStyle: "solid",
                              borderWidth: "0px",
                              boxShadow:
                                "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                              padding: "0px 10px",
                              border: "none",
                              height: "50px",
                              verticalAlign: "middle",
                              fontWeight: 500,
                              borderBottom: "1px solid rgb(21, 24, 29)",
                              borderTop: "1px solid rgb(21, 24, 29)",
                              borderBottomWidth: "1px",
                              backgroundColor: "rgb(21, 24, 29)",
                              color: "rgb(171, 170, 170)",
                            }}
                          >
                            Employee Name
                          </th>
                          <th
                            style={{
                              boxSizing: "border-box",
                              textAlign: "-webkit-match-parent",
                              borderColor: "inherit",
                              borderStyle: "solid",
                              borderWidth: "0px",
                              boxShadow:
                                "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                              padding: "0px 10px",
                              border: "none",
                              height: "50px",
                              verticalAlign: "middle",
                              fontWeight: 500,
                              borderBottom: "1px solid rgb(21, 24, 29)",
                              borderTop: "1px solid rgb(21, 24, 29)",
                              borderBottomWidth: "1px",
                              backgroundColor: "rgb(21, 24, 29)",
                              color: "rgb(171, 170, 170)",
                            }}
                          >
                            Leave Type
                          </th>
                          <th
                            style={{
                              boxSizing: "border-box",
                              textAlign: "-webkit-match-parent",
                              borderColor: "inherit",
                              borderStyle: "solid",
                              borderWidth: "0px",
                              boxShadow:
                                "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                              padding: "0px 10px",
                              border: "none",
                              height: "50px",
                              verticalAlign: "middle",
                              fontWeight: 500,
                              borderBottom: "1px solid rgb(21, 24, 29)",
                              borderTop: "1px solid rgb(21, 24, 29)",
                              borderBottomWidth: "1px",
                              backgroundColor: "rgb(21, 24, 29)",
                              color: "rgb(171, 170, 170)",
                            }}
                          >
                            Leave From
                          </th>
                          <th
                            style={{
                              boxSizing: "border-box",
                              textAlign: "-webkit-match-parent",
                              borderColor: "inherit",
                              borderStyle: "solid",
                              borderWidth: "0px",
                              boxShadow:
                                "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                              padding: "0px 10px",
                              border: "none",
                              height: "50px",
                              verticalAlign: "middle",
                              fontWeight: 500,
                              borderBottom: "1px solid rgb(21, 24, 29)",
                              borderTop: "1px solid rgb(21, 24, 29)",
                              borderBottomWidth: "1px",
                              backgroundColor: "rgb(21, 24, 29)",
                              color: "rgb(171, 170, 170)",
                            }}
                          >
                            Leave To
                          </th>
                          <th
                            style={{
                              boxSizing: "border-box",
                              textAlign: "-webkit-match-parent",
                              borderColor: "inherit",
                              borderStyle: "solid",
                              borderWidth: "0px",
                              boxShadow:
                                "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                              padding: "0px 10px",
                              border: "none",
                              height: "50px",
                              verticalAlign: "middle",
                              fontWeight: 500,
                              borderBottom: "1px solid rgb(21, 24, 29)",
                              borderTop: "1px solid rgb(21, 24, 29)",
                              borderBottomWidth: "1px",
                              backgroundColor: "rgb(21, 24, 29)",
                              color: "rgb(171, 170, 170)",
                            }}
                          >
                            Days
                          </th>
                          <th
                            style={{
                              boxSizing: "border-box",
                              textAlign: "-webkit-match-parent",
                              borderColor: "inherit",
                              borderStyle: "solid",
                              borderWidth: "0px",
                              boxShadow:
                                "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                              padding: "0px 10px",
                              border: "none",
                              height: "50px",
                              verticalAlign: "middle",
                              fontWeight: 500,
                              borderBottom: "1px solid rgb(21, 24, 29)",
                              borderTop: "1px solid rgb(21, 24, 29)",
                              borderBottomWidth: "1px",
                              backgroundColor: "rgb(21, 24, 29)",
                              color: "rgb(171, 170, 170)",
                            }}
                          >
                            Status
                          </th>
                          <th
                            style={{
                              boxSizing: "border-box",
                              textAlign: "-webkit-match-parent",
                              borderColor: "inherit",
                              borderStyle: "solid",
                              borderWidth: "0px",
                              boxShadow:
                                "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                              padding: "0px 10px",
                              border: "none",
                              height: "50px",
                              verticalAlign: "middle",
                              fontWeight: 500,
                              borderBottom: "1px solid rgb(21, 24, 29)",
                              borderTop: "1px solid rgb(21, 24, 29)",
                              borderBottomWidth: "1px",
                              backgroundColor: "rgb(21, 24, 29)",
                              color: "rgb(171, 170, 170)",
                            }}
                          >
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        style={{
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          borderStyle: "solid",
                          borderWidth: "0px",
                          verticalAlign: "inherit",
                          borderTop: "none",
                        }}
                      >
                        {leave?.map((item, index) => (
                          <tr
                            key={index}
                            style={{
                              boxSizing: "border-box",
                              borderColor: "inherit",
                              borderStyle: "solid",
                              borderWidth: "0px",
                              color: "rgb(150, 162, 180)",
                            }}
                          >
                            <td
                              style={{
                                boxSizing: "border-box",
                                borderColor: "inherit",
                                borderStyle: "solid",
                                borderWidth: "0px",
                                boxShadow:
                                  "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                                padding: "10px",
                                verticalAlign: "middle",
                                borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                                borderBottom:
                                  "1px solid rgba(255, 255, 255, 0.1)",
                                borderBottomWidth: "1px",
                                color: "rgb(150, 162, 180)",
                                backgroundColor: "rgb(26, 32, 46)",
                              }}
                            >
                              {item?.id}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                borderColor: "inherit",
                                borderStyle: "solid",
                                borderWidth: "0px",
                                boxShadow:
                                  "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                                padding: "10px",
                                verticalAlign: "middle",
                                borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                                borderBottom:
                                  "1px solid rgba(255, 255, 255, 0.1)",
                                borderBottomWidth: "1px",
                                color: "rgb(150, 162, 180)",
                                backgroundColor: "rgb(26, 32, 46)",
                              }}
                            >
                              <Avatar
                                src={item?.profilePicture}
                                style={{
                                  boxSizing: "border-box",
                                  verticalAlign: "middle",
                                  borderRadius: "50%",
                                  background: "rgb(255, 255, 255)",
                                  margin: "0px 5px 0px 0px",
                                  height: "30px",
                                  width: "30px",
                                }}
                              />
                              {item?.employeeName}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                borderColor: "inherit",
                                borderStyle: "solid",
                                borderWidth: "0px",
                                boxShadow:
                                  "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                                padding: "10px",
                                verticalAlign: "middle",
                                borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                                borderBottom:
                                  "1px solid rgba(255, 255, 255, 0.1)",
                                borderBottomWidth: "1px",
                                color: "rgb(150, 162, 180)",
                                backgroundColor: "rgb(26, 32, 46)",
                              }}
                            >
                              {item?.leaveType}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                borderColor: "inherit",
                                borderStyle: "solid",
                                borderWidth: "0px",
                                boxShadow:
                                  "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                                padding: "10px",
                                verticalAlign: "middle",
                                borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                                borderBottom:
                                  "1px solid rgba(255, 255, 255, 0.1)",
                                borderBottomWidth: "1px",
                                color: "rgb(150, 162, 180)",
                                backgroundColor: "rgb(26, 32, 46)",
                              }}
                            >
                              {item?.leaveFrom}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                borderColor: "inherit",
                                borderStyle: "solid",
                                borderWidth: "0px",
                                boxShadow:
                                  "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                                padding: "10px",
                                verticalAlign: "middle",
                                borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                                borderBottom:
                                  "1px solid rgba(255, 255, 255, 0.1)",
                                borderBottomWidth: "1px",
                                color: "rgb(150, 162, 180)",
                                backgroundColor: "rgb(26, 32, 46)",
                              }}
                            >
                              {item?.leaveTo}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                borderColor: "inherit",
                                borderStyle: "solid",
                                borderWidth: "0px",
                                boxShadow:
                                  "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                                padding: "10px",
                                verticalAlign: "middle",
                                borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                                borderBottom:
                                  "1px solid rgba(255, 255, 255, 0.1)",
                                borderBottomWidth: "1px",
                                color: "rgb(150, 162, 180)",
                                backgroundColor: "rgb(26, 32, 46)",
                              }}
                            >
                              {item?.days}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                borderColor: "inherit",
                                borderStyle: "solid",
                                borderWidth: "0px",
                                boxShadow:
                                  "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                                padding: "10px",
                                verticalAlign: "middle",
                                borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                                borderBottom:
                                  "1px solid rgba(255, 255, 255, 0.1)",
                                borderBottomWidth: "1px",
                                color: "rgb(150, 162, 180)",
                                backgroundColor: "rgb(26, 32, 46)",
                              }}
                            >
                              
                              <Badge
                                variant={"outline"}
                                borderRadius={'4px'}
                                colorScheme={
                                  item?.value === 1
                                    ? "green"
                                    : item?.value === 2
                                    ? "blue"
                                    : "red"
                                }
                              >
                                {item?.value === 1
                                  ? "Approve"
                                  : item?.value === 2
                                  ? "Pending"
                                  : "Reject"}
                              </Badge>
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                borderColor: "inherit",
                                borderStyle: "solid",
                                borderWidth: "0px",
                                boxShadow:
                                  "inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,transparent))",
                                padding: "10px",
                                verticalAlign: "middle",
                                borderTop: "1px solid rgba(120, 130, 140, 0.5)",
                                borderBottom:
                                  "1px solid rgba(255, 255, 255, 0.1)",
                                borderBottomWidth: "1px",
                                color: "rgb(150, 162, 180)",
                                backgroundColor: "rgb(26, 32, 46)",
                              }}
                            >
                              <button
                                className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base"
                                color="primary"
                                style={{
                                  margin: "0px",
                                  textDecoration:
                                    "var(--mdc-typography-button-text-decoration, none)",
                                  WebkitFontSmoothing: "antialiased",
                                  fontFamily:
                                    "var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif))",
                                  fontWeight:
                                    "var(--mdc-typography-button-font-weight, 500)",
                                  letterSpacing:
                                    "var(--mdc-typography-button-letter-spacing, .0892857143em)",
                                  textTransform:
                                    "var(--mdc-typography-button-text-transform, none)",
                                  border: "none",
                                  overflow: "visible",
                                  background: "rgba(0, 0, 0, 0)",
                                  position: "relative",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  boxSizing: "border-box",
                                  minWidth: "64px",
                                  lineHeight: "inherit",
                                  userSelect: "none",
                                  appearance: "none",
                                  verticalAlign: "middle",
                                  borderStyle: "solid",
                                  transition:
                                    "border 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s",
                                  borderRadius:
                                    "var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px))",
                                  padding: "0px 15px",
                                  borderWidth:
                                    "var(--mdc-outlined-button-outline-width, 1px)",
                                  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                  cursor: "pointer",
                                  height: "36px",
                                  color:
                                    "var(--mdc-outlined-button-label-text-color, inherit)",
                                  borderColor:
                                    "var(--mdc-outlined-button-outline-color, rgba(0, 0, 0, 0.12))",
                                  outline: "none",
                                  fontSize: "14px",
                                }}
                              >
                                <span
                                  className="mat-mdc-button-persistent-ripple mdc-button__ripple"
                                  style={{
                                    boxSizing: "border-box",
                                    borderStyle: "solid",
                                    borderColor: "rgba(0, 0, 0, 0)",
                                    borderWidth:
                                      "var(--mdc-outlined-button-outline-width, 1px)",
                                    borderRadius: "inherit",
                                    position: "absolute",
                                    pointerEvents: "none",
                                    inset: "-1px",
                                  }}
                                />
                                <span
                                  className="mdc-button__label"
                                  style={{
                                    boxSizing: "border-box",
                                    position: "relative",
                                    zIndex: 1,
                                    color: "#1E33A4",
                                  }}
                                >
                                  Details
                                </span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
