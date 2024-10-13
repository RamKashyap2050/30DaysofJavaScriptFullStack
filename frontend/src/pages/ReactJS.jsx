import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { reactDays } from "../data/days"; // Import React Days data
import { AppBar, Toolbar,Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const ReactJS = () => {
    const navigate = useNavigate();
  const RedirectToHomePage = () => navigate("/");
  return (
    <>
          {/* AppBar for Navigation */}
          <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            30 Days of Full-Stack Development
          </Typography>
          <IconButton color="inherit" onClick={RedirectToHomePage}>
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">React: Days 9-15</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reactDays.map((day) => (
          <Disclosure key={day.day}>
            {({ open }) => (
              <div className="shadow-lg rounded-lg">
                <DisclosureButton className={`w-full flex  justify-between p-4 ${open ? "bg-blue-600" : "bg-blue-500"} text-white font-semibold rounded-t-lg`}>
                  {`Day ${day.day}: ${day.title}`}
                </DisclosureButton>
                <DisclosurePanel className="p-4 text-gray-700 bg-white">
                  {day.topic}
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default ReactJS;
