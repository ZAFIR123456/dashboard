import { Avatar, Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { MdMenu, MdNotificationsNone } from "react-icons/md";

function Header() {
  return (
    <Flex
      boxSizing="border-box"
      flex="0 1 auto"
      alignItems="center"
      justifyContent="space-between"
      padding="0px"
      fontFamily="Roboto, sans-serif"
      position="fixed"
      top="0px"
      left="0px"
      zIndex={999}
      width="100%"
      minHeight="60px"
      boxShadow="rgba(183, 192, 206, 0.2) 3px 0px 10px"
      backgroundColor="rgb(255, 255, 255)"
    >
      <Flex
        alignItems="center"
        style={{
          boxSizing: "border-box",
          textDecoration: "none",
          marginRight: "1rem",
          padding: "6px 25px",
          height: "45px",
          paddingTop: "6px",
          paddingBottom: "6px",
          lineHeight: "20px",
          textAlign: "center",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "rgb(44, 48, 59)",
          outline: "none",
          fontSize: "14px",
          marginLeft: "50px",
        }}
      >
        <Image
          src="https://einfosoft.com/templates/admin/kuber/source/light/assets/images/logo.png"
          boxSizing="border-box"
          verticalAlign="top"
        />
        <span
          style={{
            boxSizing: "border-box",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "32px",
            paddingLeft: "10px",
            color: "rgb(0, 0, 0)",
            cursor: "pointer",
          }}
        >
          Kuber
        </span>

        <IconButton
          ml={"100px"}
          icon={<MdMenu />}
          cursor="pointer"
          fontSize="22px"
          bgColor={"white"}
          _hover={{ bgColor: "white" }}
        />
      </Flex>
      
      <Flex alignItems="center" w={'320px'} justifyContent={'space-between'}>
        <Image
          height={17}
          src="https://einfosoft.com/templates/admin/kuber/source/light/assets/images/flags/us.jpg"
          boxSizing="border-box"
          verticalAlign="middle"
          borderRadius="3px"
          color="rgb(0, 0, 0)"
          cursor="pointer"
          fontWeight={500}
          font="500 14px / 40px Roboto, sans-serif"
          letterSpacing="1.25px"
          lineHeight="40px"
          listStyleType="none"
          listStyle="outside none none"
          textAlign="center"
        />

        <IconButton
          icon={<MdNotificationsNone />}
          cursor="pointer"
          fontSize="22px"
          bgColor={"white"}
          _hover={{ bgColor: "white" }}
        />

        <Flex

          style={{
            boxSizing: "border-box",
            fontWeight: "bold",
            color: "rgb(0, 0, 0)",
            cursor: "pointer",
            font: "500 14px / 60px Roboto, sans-serif",
            letterSpacing: "1.25px",
            lineHeight: "60px",
            listStyleType: "none",
            listStyle: "outside none none",
            textAlign: "center",
            width: "150px",
            justifyContent:"space-around",
            alignItems:"center",
          }}
        >
          Ella Jones
       

        <Avatar
          mr={"10px"}
          size="sm"
          name="Kent Dodds"
          src="https://bit.ly/kent-c-dodds"
        />
      </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;





