import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Accordion, Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
//import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../Themes";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeIcon from '@mui/icons-material/Home';
import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SvgIcon } from '@mui/material';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[500],
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
                <Typography variant="h3" color={colors.grey[500]}>
                  NOTES
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
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Typography
              variant="h6"
              color={colors.grey[500]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Courses
            </Typography>
            <Accordion
            sx = {{
              backgroundColor: 'transparent'
            }}
            >
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
                <Item
                  title="EPS702"
                  to="/quantMeth"
                  icon={
                    <SvgIcon>
                    <svg width="256px" height="193px" viewBox="0 0 256 193" version="1.1" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid">
                        <defs>
                            <linearGradient x1="37.9725688%" y1="16.9988952%" x2="91.1208363%" y2="76.3260008%" id="linearGradient-1">
                                <stop stop-color="#C9CBCE" offset="0%"></stop>
                                <stop stop-color="#7B7A81" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                      <g>
                        <path d="M149.333,149.333 C96,149.333 50.674,122.62 50.674,90.62 C50.674,58.62 90.667,32 144,32 C211.357,32 242.572,57.911 242.572,89.911 C242.572,121.911 208.165,149.333 149.333,149.333 M128,0 C58.667,0 0,37.333 0,85.333 C0,130.667 58.312,168.302 127.646,168.302 C196.979,168.302 256,133.333 256,85.333 C256,37.333 197.333,0 128,0" fill="url(#linearGradient-1)"></path>
                        <path d="M105.946,51.829 L105.946,192.938 L148.589,192.938 L148.589,138.063 C159.25,138.063 165.6,135.735 172.575,148.515 C183.236,166.807 196.562,192.938 196.562,192.938 L247.2,192.938 C247.2,192.938 215.218,140.676 212.553,138.063 C207.638,132.836 201.892,132.836 193.897,130.223 C209.888,127.61 224.796,120.975 229.979,106.759 C234.51,93.694 233.977,77.074 224.265,65.929 C215.854,57.11 207.223,51.829 185.901,51.829 L105.946,51.829 L105.946,51.829 Z M148.589,81.217 L176.573,81.217 C183.209,81.217 188.566,87.75 188.566,94.282 C188.566,100.815 183.236,107.348 176.573,107.348 L148.589,107.348 L148.589,81.217 L148.589,81.217 Z" fill="#2165B6"></path>
                      </g>
                    </svg>
                    </SvgIcon>
                  }
                  selected={selected}
                  setSelected={setSelected}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Item
                    title="Week 1"
                    to="/week1"
                    //icon={<GroupsIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Divider/>
                  <Item
                    title="Week 2"
                    to="/week2"
                    //icon={<GroupsIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Divider/>
                  <Item
                    title="Week 4"
                    to="/week4"
                    //icon={<GroupsIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Divider/>
                  <Item
                    title="Week 5"
                    to="/week5"
                    //icon={<GroupsIcon />}
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