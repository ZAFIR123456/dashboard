import { Avatar, AvatarGroup, Box, Flex } from "@chakra-ui/react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const ProjectCard = () => {
  return (
    <Box
      style={{
        boxSizing: "border-box",
        listStyle: "none",
        padding: "1rem",
        transition: "box-shadow 0.2s ease 0s",
        borderRadius: "10px",
        cursor: "pointer",
        minHeight: "50px",
        position: "relative",
        marginBottom: "24px",

        paddingRight: "2rem",
        background: "rgb(16, 19, 28)",
        border: "1px solid rgb(54, 59, 71)",
        width: "223.75px",
      }}
      _hover={{ boxShadow: "rgba(183, 192, 206, 0.2) 0px 0px 10px 0px" }}
    >
      <Flex
        className="project-title"
        style={{
          boxSizing: "border-box",
          marginTop: "0px",
          marginBottom: "0.5rem",
          fontWeight: 500,
          lineHeight: 1.2,
          fontSize: "17px",
          color: "rgb(150, 162, 180)",
        }}
        alignItems={"center"}
      >
        <TaskAltIcon
          className="material-icons-outlined project-icon"
          style={{
            boxSizing: "border-box",
            whiteSpace: "nowrap",
            fontFamily: '"Material Icons Outlined"',
            fontWeight: "normal",
            fontStyle: "normal",
            lineHeight: 1,
            letterSpacing: "normal",
            textTransform: "none",
            display: "inline-block",
            overflowWrap: "normal",
            direction: "ltr",
            fontFeatureSettings: '"liga"',
            WebkitFontSmoothing: "antialiased",
            fontSize: "20px",
            marginRight: "5px",
            verticalAlign: "text-top",
            cursor: "pointer",
            font: "500 17px / 20.4px Roboto, sans-serif",
            listStyleType: "none",
            listStyle: "outside none none",
            textAlign: "left",
          }}
        >
          {" "}
        </TaskAltIcon>
        ERP System
      </Flex>
      <small
        className="block text-ellipsis m-b-15"
        style={{
          boxSizing: "border-box",
          fontSize: "0.875em",
          marginBottom: "15px",
        }}
      >
        <span className="text-xs" style={{ boxSizing: "border-box" }}>
          12
        </span>
        <span
          className="text-muted"
          style={{
            boxSizing: "border-box",
            marginBottom: "10px",
            color: "rgb(150, 162, 180)",
          }}
        >
          {" "}
          open tasks{" "}
        </span>
      </small>
      <span
        className="project-bedge project-type-Testing"
        style={{
          boxSizing: "border-box",
          borderRadius: "3px",
          padding: "2px 5px",
          fontSize: "12px",
          fontWeight: 500,
          display: "inline-flex",
          cursor: "default",
          userSelect: "none",
          cssFloat: "right",
          backgroundColor: "rgb(6, 168, 0)",
          color: "rgb(255, 255, 255)",
        }}
      >
        <div
          className="pro-left"
          style={{
            boxSizing: "border-box",
            padding: "0px 10px",
            borderRadius: "5px",
            fontWeight: 500,
          }}
        >
          Testing
        </div>
      </span>
      <p
        className="mt-3"
        style={{
          boxSizing: "border-box",
          marginBottom: "1rem",
          marginTop: "1rem",
        }}
      >
        {" "}
        All the Lorem Ipsum generators on the Internet tend to repeat necessary,
        making this the first true generator on the Internet.{" "}
      </p>
      <div
        className="project-members m-b-15"
        style={{ boxSizing: "border-box", marginBottom: "15px" }}
      >
        <ul
          className="team-members"
          style={{
            boxSizing: "border-box",
            marginTop: "0px",
            paddingLeft: "0px",
            listStyleType: "none",
            marginBottom: "0px",
          }}
        >
          <li
            className="dropdown avatar-dropdown"
            style={{
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <div
              className="row"
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexWrap: "wrap",
                marginTop: "calc(-1 * 0)",
                marginRight: "calc(-.5 * 1.5rem)",
                marginLeft: "calc(-.5 * 1.5rem)",
                marginBottom: "0px",
              }}
            >
              <div
                className="col-5 pro-left mb-2"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "41.6667%",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  fontWeight: 500,
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  marginBottom: "0.5rem",
                }}
              >
                Created:
              </div>
              <div
                className="col-7 pro-left mb-2"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "58.3333%",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  fontWeight: 500,
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  marginBottom: "0.5rem",
                }}
              >
                <DateRangeIcon
                  className="material-icons-outlined project-icon2"
                  style={{
                    boxSizing: "border-box",
                    whiteSpace: "nowrap",
                    fontFamily: '"Material Icons Outlined"',
                    fontWeight: "normal",
                    fontStyle: "normal",
                    lineHeight: 1,
                    letterSpacing: "normal",
                    textTransform: "none",
                    display: "inline-block",
                    overflowWrap: "normal",
                    direction: "ltr",
                    fontFeatureSettings: '"liga"',
                    WebkitFontSmoothing: "antialiased",
                    fontSize: "17px",
                    marginRight: "5px",
                    verticalAlign: "text-top",
                  }}
                />{" "}
                Jan 11, 2020
              </div>
              <div
                className="col-5 pro-left mb-2"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "41.6667%",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  fontWeight: 500,
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  marginBottom: "0.5rem",
                }}
              >
                Team Leader:
              </div>
              <div
                className="col-7 pro-left mb-2"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "58.3333%",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  fontWeight: 500,
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  marginBottom: "0.5rem",
                }}
              >
                Jens Brincker
              </div>
              <div
                className="col-5 pro-left mb-2"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "41.6667%",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  fontWeight: 500,
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  marginBottom: "0.5rem",
                }}
              >
                Priority:
              </div>
              <Flex
                className="col-7 mb-2 pro-lef project-priority--1"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  paddingRight: "calc(1.5rem * .5)",
                  paddingLeft: "calc(1.5rem * .5)",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "58.3333%",
                  color: "rgb(0, 218, 0)",
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                }}
                alignItems={"center"}
              >
                Low
              </Flex>
              <div
                className="col-5 pro-left mb-2"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "41.6667%",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  fontWeight: 500,
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  marginBottom: "0.5rem",
                }}
              >
                Deadline:
              </div>
              <div
                className="col-7 pro-left mb-2"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "58.3333%",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  fontWeight: 500,
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  marginBottom: "0.5rem",
                }}
              >
                <div
                  className="deadline ng-star-inserted"
                  style={{ boxSizing: "border-box" }}
                >
                  <DateRangeIcon
                    className="material-icons-outlined project-icon2"
                    style={{
                      boxSizing: "border-box",
                      whiteSpace: "nowrap",
                      fontFamily: '"Material Icons Outlined"',
                      fontWeight: "normal",
                      fontStyle: "normal",
                      lineHeight: 1,
                      letterSpacing: "normal",
                      textTransform: "none",
                      display: "inline-block",
                      overflowWrap: "normal",
                      direction: "ltr",
                      fontFeatureSettings: '"liga"',
                      WebkitFontSmoothing: "antialiased",
                      fontSize: "17px",
                      marginRight: "5px",
                      verticalAlign: "text-top",
                    }}
                  />{" "}
                  Apr 17, 2021{" "}
                </div>
              </div>
              <div
                className="col-5 pro-left mb-2"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "41.6667%",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  fontWeight: 500,
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  marginBottom: "0.5rem",
                }}
              >
                Comments:
              </div>
              <div
                className="col-7 pro-left mb-2"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "58.3333%",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  fontWeight: 500,
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  marginBottom: "0.5rem",
                }}
              >
                10
              </div>
              <div
                className="col-5 pro-left mb-2"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "41.6667%",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  fontWeight: 500,
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  marginBottom: "0.5rem",
                }}
              >
                Bug:
              </div>
              <div
                className="col-7 pro-left mb-2"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "58.3333%",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  fontWeight: 500,
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  marginBottom: "0.5rem",
                }}
              >
                5
              </div>
              <div
                className="col-5 pro-left mb-2"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "41.6667%",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  fontWeight: 500,
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  marginBottom: "0.5rem",
                }}
              >
                Team:
              </div>
              <div
                className="col-7 pro-left"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "58.3333%",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  fontWeight: 500,
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <AvatarGroup size="sm" max={3}>
                  <Avatar
                    boxShadow="rgba(107, 111, 130, 0.3) 0px 2px 10px"
                    border="2px solid rgb(84, 84, 84)"
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    boxShadow="rgba(107, 111, 130, 0.3) 0px 2px 10px"
                    border="2px solid rgb(84, 84, 84)"
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar
                    name="Kent Dodds"
                    boxShadow="rgba(107, 111, 130, 0.3) 0px 2px 10px"
                    border="2px solid rgb(84, 84, 84)"
                    src="https://bit.ly/kent-c-dodds"
                  />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                    boxShadow="rgba(107, 111, 130, 0.3) 0px 2px 10px"
                    border="2px solid rgb(84, 84, 84)"
                  />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                    boxShadow="rgba(107, 111, 130, 0.3) 0px 2px 10px"
                    border="2px solid rgb(84, 84, 84)"
                  />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                    boxShadow="rgba(107, 111, 130, 0.3) 0px 2px 10px"
                    border="2px solid rgb(84, 84, 84)"
                  />
                </AvatarGroup>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <p
        className="m-b-5"
        style={{
          boxSizing: "border-box",
          marginTop: "0px",
          marginBottom: "5px",
        }}
      >
        Progress{" "}
        <span
          className="text-success float-end"
          style={{
            boxSizing: "border-box",
            cssFloat: "right",
            color: "rgba(25,135,84,1)",
          }}
        >
          67%
        </span>
      </p>
      <div
        className="progress progress-xs mb-0"
        style={{
          boxSizing: "border-box",
          overflow: "hidden",
          borderRadius: ".375rem",
          display: "flex",
          fontSize: ".75rem",
          backgroundColor: "#e9ecef",
          height: "4px",
          marginBottom: "0px",
        }}
      >
        <ProgressBar
          width="200px"
          height="4px"
          bgColor="#3F51B5"
          isLabelVisible={false}
          completed={60}
          borderRadius="30px"
        ></ProgressBar>
      </div>
    </Box>
  );
};

export default ProjectCard;

