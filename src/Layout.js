import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <Header />
      <Flex w={'100%'} mt={"60px"}>
        <Box w={'20%'}  h={'calc(100vh - 60PX)'}>
          <Sidebar />
        </Box>
        <Box w={'80%'} bgColor={'yellow'} h={'calc(100vh - 60PX)'}>
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
