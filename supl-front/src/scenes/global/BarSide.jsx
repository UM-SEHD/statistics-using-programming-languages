import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Accordion, Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
//import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../Themes";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GroupsIcon from '@mui/icons-material/Groups';
import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const BarSide = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.greenAccent[700]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#ffcb94 !important",
        },
        "& .pro-menu-item.active": {
          color: "#ff931f !important",
        },
      }}
    >
       
      <Sidebar collapsed={isCollapsed} style={{ minHeight: '100%', display:'flex', flexDirection:'column' }}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  DOCS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="HOME"
              to="/"
              icon={<GroupsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Courses
            </Typography>
            <Accordion>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
                <Item
                  title="EPS702"
                  to="/quantMeth"
                  icon={<GroupsIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Item
                    title="Week 1"
                    to="/week1"
                    icon={<GroupsIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Week 2"
                    to="/week2"
                    icon={<GroupsIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Week 4"
                    to="/week4"
                    icon={<GroupsIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Week 5"
                    to="/week5"
                    icon={<GroupsIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
              </AccordionDetails>
            </Accordion>
          </Box>
        </Menu>
      </Sidebar>
      
    </Box>
    </div>
  );
};

export default BarSide;