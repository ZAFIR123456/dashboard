import { Box, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { FiArrowDown, FiArrowUp, FiCircle, FiHome } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
import ProgressBar from "@ramonak/react-progress-bar";
import Chart from "./Chart";
import DonutChart from "./DonutChart";

const Home = () => {
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
              Dashboad 2
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
                <Icon as={FiHome} fontSize={"19px"}></Icon>
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
                Home
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
                Dashboad 2
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
                height:"468.188px",
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
              height:"468.188px"
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
                height:"468.188px",
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
                  <DonutChart/>
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
          
      

        </div>
      </div>

        </Flex>
      </Box>
    </>
  );
};

export default Home;
