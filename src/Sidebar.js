import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Sidebar = () => {
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
        className="ng-star-inserted"
        style={{
          boxSizing: "border-box",
          cursor: "pointer",
          listStyleType: "none",
          listStyle: "none",
        }}
      >
        <Box
          className="header ng-star-inserted"
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
            color: "rgb(0, 0, 0)",
          }}
        >
          Main
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
