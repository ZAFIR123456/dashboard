import { Avatar, AvatarGroup, Badge, Box, Flex, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp, FiCircle, FiHome } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const AllProjects = () => {
  return (
    <>
      <Box
        boxSizing="border-box"
        minHeight="calc(100vh - 60px)"
        bgColor={"#232B3E"}
        px={"10px"}
        w={"100%"}
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
              All Projects
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
                <Link to={"/"}>
                  <Icon as={FiHome} fontSize={"19px"}></Icon>
                </Link>
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
                <Link to={"/"}> Home </Link>
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
                <Link to={"/allprojects"}> All Projects</Link>
              </Box>
            </Flex>
          </Flex>
        </Flex>

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
            background: "rgb(26, 32, 46)",
            border: "none",
            backgroundClip: "initial",
            backgroundColor: "rgb(26, 32, 46)",
            color: "rgb(150, 162, 180)",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
          }}
          mx={"10px"}
        >
          <div
            style={{
              boxSizing: "border-box",
              padding: "15px",
              fontSize: "14px",
              color: "rgb(150, 162, 180)",
            }}
          >
            <Flex mt={"10px"}>
              <div
                className="header"
                style={{
                  boxSizing: "border-box",
                  flex: "0 1 auto",
                  position: "relative",
                  width: "100%",
                  lineHeight: "30px",
                  padding: "1.125rem 0.875rem",
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(150, 162, 180)",
                  background: "rgb(16, 19, 28)",
                }}
              >
                <div
                  className="title"
                  style={{
                    boxSizing: "border-box",
                    flex: "1 1 0%",
                    textAlign: "center",
                  }}
                >
                  <h2
                    style={{
                      boxSizing: "border-box",
                      paddingRight: "10px",
                      color: "rgb(150, 162, 180)",
                      margin: "0px 0px 0.375rem",
                      marginTop: "0px",
                      marginBottom: "0.375rem",
                      fontWeight: 500,
                      fontSize: "18px",
                      lineHeight: 1,
                    }}
                  >
                    New Projects
                  </h2>
                  <div
                    className="count"
                    style={{
                      boxSizing: "border-box",
                      fontSize: "0.875rem",
                      lineHeight: 1,
                      opacity: 0.65,
                    }}
                  >
                    3 projects{" "}
                  </div>
                </div>
              </div>

              <div
                className="header"
                style={{
                  boxSizing: "border-box",
                  flex: "0 1 auto",
                  position: "relative",
                  width: "100%",
                  lineHeight: "30px",
                  padding: "1.125rem 0.875rem",
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(150, 162, 180)",
                  background: "rgb(16, 19, 28)",
                }}
              >
                <div
                  className="title"
                  style={{
                    boxSizing: "border-box",
                    flex: "1 1 0%",
                    textAlign: "center",
                  }}
                >
                  <h2
                    style={{
                      boxSizing: "border-box",
                      paddingRight: "10px",
                      color: "rgb(150, 162, 180)",
                      margin: "0px 0px 0.375rem",
                      marginTop: "0px",
                      marginBottom: "0.375rem",
                      fontWeight: 500,
                      fontSize: "18px",
                      lineHeight: 1,
                    }}
                  >
                    Running
                  </h2>
                  <div
                    className="count"
                    style={{
                      boxSizing: "border-box",
                      fontSize: "0.875rem",
                      lineHeight: 1,
                      opacity: 0.65,
                    }}
                  >
                    3 projects{" "}
                  </div>
                </div>
              </div>

              <div
                className="header"
                style={{
                  boxSizing: "border-box",
                  flex: "0 1 auto",
                  position: "relative",
                  width: "100%",
                  lineHeight: "30px",
                  padding: "1.125rem 0.875rem",
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(150, 162, 180)",
                  background: "rgb(16, 19, 28)",
                }}
              >
                <div
                  className="title"
                  style={{
                    boxSizing: "border-box",
                    flex: "1 1 0%",
                    textAlign: "center",
                  }}
                >
                  <h2
                    style={{
                      boxSizing: "border-box",
                      paddingRight: "10px",
                      color: "rgb(150, 162, 180)",
                      margin: "0px 0px 0.375rem",
                      marginTop: "0px",
                      marginBottom: "0.375rem",
                      fontWeight: 500,
                      fontSize: "18px",
                      lineHeight: 1,
                    }}
                  >
                    On Hold
                  </h2>
                  <div
                    className="count"
                    style={{
                      boxSizing: "border-box",
                      fontSize: "0.875rem",
                      lineHeight: 1,
                      opacity: 0.65,
                    }}
                  >
                    2 projects{" "}
                  </div>
                </div>
              </div>

              <div
                className="header"
                style={{
                  boxSizing: "border-box",
                  flex: "0 1 auto",
                  position: "relative",
                  width: "100%",
                  lineHeight: "30px",
                  padding: "1.125rem 0.875rem",
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(150, 162, 180)",
                  background: "rgb(16, 19, 28)",
                }}
              >
                <div
                  className="title"
                  style={{
                    boxSizing: "border-box",
                    flex: "1 1 0%",
                    textAlign: "center",
                  }}
                >
                  <h2
                    style={{
                      boxSizing: "border-box",
                      paddingRight: "10px",
                      color: "rgb(150, 162, 180)",
                      margin: "0px 0px 0.375rem",
                      marginTop: "0px",
                      marginBottom: "0.375rem",
                      fontWeight: 500,
                      fontSize: "18px",
                      lineHeight: 1,
                    }}
                  >
                    Finished
                  </h2>
                  <div
                    className="count"
                    style={{
                      boxSizing: "border-box",
                      fontSize: "0.875rem",
                      lineHeight: 1,
                      opacity: 0.65,
                    }}
                  >
                    1 projects{" "}
                  </div>
                </div>
              </div>
            </Flex>

            <Flex bgColor={"#060707"}>
              <Flex
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  padding: "0.875rem",
                  listStyle: "none",
                  marginTop: "0px",
                  marginBottom: "0px",
                  paddingLeft: "0.875rem",
                  listStyleType: "none",
                }}
              >
                <ProjectCard/>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </Box>
    </>
  );
};

export default AllProjects;
