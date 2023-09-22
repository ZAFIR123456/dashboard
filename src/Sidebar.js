import {
  Box,
  Collapse,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
// import { BsChevronDown } from "react-icons/bs";
import {
  FiAward,
  FiBook,
  FiBookOpen,
  FiClipboard,
  FiCoffee,
  FiEdit,
  FiFileText,
  FiMonitor,
  FiTrello,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
  const integrations = useDisclosure();
  const projectsIntegrations = useDisclosure();
  const employeesIntegrations = useDisclosure();
  const leavesIntegrations = useDisclosure();
  const holidaysIntegrations = useDisclosure();
  const attendanceIntegrations = useDisclosure();
  const clientsIntegrations = useDisclosure();
  const accountIntegrations = useDisclosure();
  const payrollIntegrations = useDisclosure();
  const leadersIntegrations = useDisclosure();
  const jobsIntegrations = useDisclosure();
  const reportsIntegrations = useDisclosure();
  // const color = useColorModeValue("gray.600", "gray.300");

  return (
    <Box>
      <Box
        style={{
          boxSizing: "border-box",
          padding: "25px 0px 10px",
          cssFloat: "left",
          width: "100%",
          color: "rgb(204, 204, 204)",
          cursor: "pointer",
          listStyleType: "none",
          listStyle: "outside none none",
          textAlign: "left",
        }}
      >
        <Box
          style={{
            boxSizing: "border-box",
            margin: "0px auto",
            width: "35%",
            maxWidth: "75px",
          }}
        >
          <Image
            alt="User Image"
            src="https://einfosoft.com/templates/admin/kuber/source/light/assets/images/user/admin.jpg"
            style={{
              boxSizing: "border-box",
              verticalAlign: "middle",
              background: "rgb(255, 255, 255)",
              zIndex: 1000,
              position: "inherit",
              boxShadow: "rgba(78, 78, 78, 0.15) 10px 10px 13px",
              borderRadius: "15%",
              maxWidth: "100%",
            }}
          />
        </Box>
      </Box>

      <Box
        style={{
          fontSize: "13px",
          boxSizing: "border-box",
          color: "rgb(6, 6, 6)",
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        Sarah Smith
      </Box>

      <Box
        style={{
          boxSizing: "border-box",
          fontSize: "11px",
          color: "rgb(0, 0, 0)",
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        Admin{" "}
      </Box>

      <Box
        style={{
          boxSizing: "border-box",
          // cursor: "pointer",
          listStyleType: "none",
          listStyle: "none",
        }}
      >
        <Box
          style={{
            boxSizing: "border-box",
            flex: "0 1 auto",
            padding: "1.125rem 0px",
            background:
              "linear-gradient(to top,var(--color-purple-heart),var(--color-purple-heart-light))",
            margin: "15px 0px 5px 23px",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            cursor: "pointer",
            color: "rgb(0, 0, 0)",
          }}
        >
          Main
        </Box>

        <Box boxSizing="border-box" cursor="pointer" px={"10px"}>
          <Flex
            onClick={integrations.onToggle}
            textColor={"black"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"14px"}
            h={"50px"}
            _hover={{ bgColor: "#F0F3FB" }}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Icon as={FiMonitor} ml={"8px"} fontSize={"17px"} />
            <Flex
              ml={"5px"}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
            >
              Dashboard
            </Flex>
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={integrations.isOpen && "rotate(90deg)"}
              mr={"8px"}
            />
          </Flex>
          <Collapse in={integrations.isOpen}>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Dashboard 1
            </Flex>
          </Collapse>
        </Box>
        <Box boxSizing="border-box" cursor="pointer" px={"10px"} mt={"10px"}>
          <Flex
            onClick={projectsIntegrations.onToggle}
            textColor={"black"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"14px"}
            h={"50px"}
            _hover={{ bgColor: "#F0F3FB" }}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Icon as={FiBook} ml={"8px"} fontSize={"17px"} />
            <Flex
              ml={"5px"}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
            >
              Projects
            </Flex>
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={projectsIntegrations.isOpen && "rotate(90deg)"}
              mr={"8px"}
            />
          </Flex>
          <Collapse in={projectsIntegrations.isOpen}>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              All Projects
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Add Projects
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Estimates
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Project Details
            </Flex>
          </Collapse>
        </Box>
        <Box boxSizing="border-box" cursor="pointer" px={"10px"} mt={"10px"}>
          <Flex
            onClick={employeesIntegrations.onToggle}
            textColor={"black"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"14px"}
            h={"50px"}
            _hover={{ bgColor: "#F0F3FB" }}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Icon as={FiUsers} ml={"8px"} fontSize={"17px"} />
            <Flex
              ml={"5px"}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
            >
              Employees
            </Flex>
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={employeesIntegrations.isOpen && "rotate(90deg)"}
              mr={"8px"}
            />
          </Flex>
          <Collapse in={employeesIntegrations.isOpen}>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              All Employees
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Add Employees
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Edit Employees
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Employees Profile
            </Flex>
          </Collapse>
        </Box>
        <Box boxSizing="border-box" cursor="pointer" px={"10px"} mt={"10px"}>
          <Flex
            onClick={leavesIntegrations.onToggle}
            textColor={"black"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"14px"}
            h={"50px"}
            _hover={{ bgColor: "#F0F3FB" }}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Icon as={FiTrello} ml={"8px"} fontSize={"17px"} />
            <Flex
              ml={"5px"}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
            >
              Leave Management
            </Flex>
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={leavesIntegrations.isOpen && "rotate(90deg)"}
              mr={"8px"}
            />
          </Flex>
          <Collapse in={leavesIntegrations.isOpen}>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              All Leaves Request
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Leave Balance
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Leave Types
            </Flex>
          </Collapse>
        </Box>
        <Box boxSizing="border-box" cursor="pointer" px={"10px"} mt={"10px"}>
          <Flex
            onClick={holidaysIntegrations.onToggle}
            textColor={"black"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"14px"}
            h={"50px"}
            _hover={{ bgColor: "#F0F3FB" }}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Icon as={FiCoffee} ml={"8px"} fontSize={"17px"} />
            <Flex
              ml={"5px"}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
            >
              Holidays
            </Flex>
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={holidaysIntegrations.isOpen && "rotate(90deg)"}
              mr={"8px"}
            />
          </Flex>
          <Collapse in={holidaysIntegrations.isOpen}>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              All Holidays
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Add Holidays
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Edit Holidays
            </Flex>
          </Collapse>
        </Box>
        <Box boxSizing="border-box" cursor="pointer" px={"10px"} mt={"10px"}>
          <Flex
            onClick={attendanceIntegrations.onToggle}
            textColor={"black"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"14px"}
            h={"50px"}
            _hover={{ bgColor: "#F0F3FB" }}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Icon as={FiEdit} ml={"8px"} fontSize={"17px"} />
            <Flex
              ml={"5px"}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
            >
              Attendance
            </Flex>
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={attendanceIntegrations.isOpen && "rotate(90deg)"}
              mr={"8px"}
            />
          </Flex>
          <Collapse in={attendanceIntegrations.isOpen}>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Today's Attendance
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Employee Attendance
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Attendance Sheet
            </Flex>
          </Collapse>
        </Box>
        <Box boxSizing="border-box" cursor="pointer" px={"10px"} mt={"10px"}>
          <Flex
            onClick={clientsIntegrations.onToggle}
            textColor={"black"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"14px"}
            h={"50px"}
            _hover={{ bgColor: "#F0F3FB" }}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Icon as={FiUser} ml={"8px"} fontSize={"17px"} />
            <Flex
              ml={"5px"}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
            >
              Clients
            </Flex>
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={clientsIntegrations.isOpen && "rotate(90deg)"}
              mr={"8px"}
            />
          </Flex>
          <Collapse in={clientsIntegrations.isOpen}>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              All Client
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Add Client
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Edit Client
            </Flex>
          </Collapse>
        </Box>
        <Box boxSizing="border-box" cursor="pointer" px={"10px"} mt={"10px"}>
          <Flex
            onClick={accountIntegrations.onToggle}
            textColor={"black"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"14px"}
            h={"50px"}
            _hover={{ bgColor: "#F0F3FB" }}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Icon as={FiBookOpen} ml={"8px"} fontSize={"17px"} />
            <Flex
              ml={"5px"}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
            >
              Accounts
            </Flex>
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={accountIntegrations.isOpen && "rotate(90deg)"}
              mr={"8px"}
            />
          </Flex>
          <Collapse in={accountIntegrations.isOpen}>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              All Payments
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Add Payments
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Invoice
            </Flex>
          </Collapse>
        </Box>
        <Box boxSizing="border-box" cursor="pointer" px={"10px"} mt={"10px"}>
          <Flex
            onClick={payrollIntegrations.onToggle}
            textColor={"black"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"14px"}
            h={"50px"}
            _hover={{ bgColor: "#F0F3FB" }}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Icon as={FiClipboard} ml={"8px"} fontSize={"17px"} />
            <Flex
              ml={"5px"}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
            >
              Payroll
            </Flex>
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={payrollIntegrations.isOpen && "rotate(90deg)"}
              mr={"8px"}
            />
          </Flex>
          <Collapse in={payrollIntegrations.isOpen}>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Employee Salary
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Pay Slip
            </Flex>
          </Collapse>
        </Box>
        <Box boxSizing="border-box" cursor="pointer" px={"10px"} mt={"10px"}>
          <Flex
            onClick={leadersIntegrations.onToggle}
            textColor={"black"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"14px"}
            h={"50px"}
            _hover={{ bgColor: "#F0F3FB" }}
            alignItems={"center"}
            // justifyContent={"space-around"}
          >
            <Icon as={FiUsers} ml={"8px"} fontSize={"17px"} />
            <Flex
              ml={"5px"}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
            >
              Leaders
            </Flex>
            {/* <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              // transform={leadersIntegrations.isOpen && "rotate(90deg)"}
              mr={"8px"}
            /> */}
          </Flex>
        </Box>
        <Box boxSizing="border-box" cursor="pointer" px={"10px"} mt={"10px"}>
          <Flex
            onClick={jobsIntegrations.onToggle}
            textColor={"black"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"14px"}
            h={"50px"}
            _hover={{ bgColor: "#F0F3FB" }}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Icon as={FiAward} ml={"8px"} fontSize={"17px"} />
            <Flex
              ml={"5px"}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
            >
              Jobs
            </Flex>
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={jobsIntegrations.isOpen && "rotate(90deg)"}
              mr={"8px"}
            />
          </Flex>
          <Collapse in={jobsIntegrations.isOpen}>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Jobs List
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Resumes
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Condidates
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Shortlist Condidates
            </Flex>
          </Collapse>
        </Box>
        <Box boxSizing="border-box" cursor="pointer" px={"10px"} mt={"10px"}>
          <Flex
            onClick={reportsIntegrations.onToggle}
            textColor={"black"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"14px"}
            h={"50px"}
            _hover={{ bgColor: "#F0F3FB" }}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Icon as={FiFileText} ml={"8px"} fontSize={"17px"} />
            <Flex
              ml={"5px"}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
            >
              Reports
            </Flex>
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={reportsIntegrations.isOpen && "rotate(90deg)"}
              mr={"8px"}
            />
          </Flex>
          <Collapse in={reportsIntegrations.isOpen}>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Leave Reports
            </Flex>
            <Flex
              // _hover={{ bgColor: "#F0F3FB" }}
              textColor={"black"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"14px"}
              lineHeight={"32px"}
              h={"40px"}
              alignItems={"center"}
              mt={"5px"}
              pl={"35px"}
            >
              Expense Reports
            </Flex>
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
