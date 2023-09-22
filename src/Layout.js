import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <Header />
      <Flex w={"100%"} mt={"60px"}>
        <Box
          w={"20%"}
          bgColor={"white"}
          overflowY={"scroll"}
          sx={{
            // Style the scrollbar
            "::-webkit-scrollbar": {
              width: "8px", // Width of the scrollbar
            },
            "::-webkit-scrollbar-track": {
              background: "transparent", // Track background color
            },
            "::-webkit-scrollbar-thumb": {
              background: "#CCCCCC", // Scrollbar thumb color
              borderRadius: "4px", // Make the scrollbar thumb round
            },
          }}
          h={"calc(100vh - 60PX)"}
          // position={"fixed"}
        >
          <Sidebar />
        </Box>
        <Box
          w={"80%"}
          h={"calc(100vh - 60PX)"}
          overflowY={"scroll"}
          sx={{
            // Style the scrollbar
            "::-webkit-scrollbar": {
              width: "8px", // Width of the scrollbar
            },
            "::-webkit-scrollbar-track": {
              background: "transparent", // Track background color
            },
            "::-webkit-scrollbar-thumb": {
              background: "#CCCCCC", // Scrollbar thumb color
              borderRadius: "4px", // Make the scrollbar thumb round
            },
          }}
        >
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
