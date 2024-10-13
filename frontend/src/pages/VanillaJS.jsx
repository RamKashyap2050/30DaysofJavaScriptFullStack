import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { vanillaJS } from "../data/days"; // Import VanillaJS data

const VanillaJS = () => {
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
        <h1 className="text-3xl font-bold mb-4 text-center">
          Vanilla JS: Days 1-8
        </h1>

        {/* Grid Layout for Days */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {vanillaJS.map((day) => (
            <Disclosure key={day.day} as="ul">
              {({ open }) => (
                <>
                  <DisclosureButton
                    className={`w-full flex  justify-between p-4 ${
                      open ? "bg-blue-600" : "bg-blue-500"
                    } text-white font-semibold rounded-t-lg`}
                  >
                    <span>{`Day ${day.day}: ${day.title}`}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-5 h-5 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </DisclosureButton>

                  <DisclosurePanel className="p-4 text-gray-700 bg-white transition-all duration-300 ease-in-out">
                    {day.topic}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </>
  );
};

export default VanillaJS;
