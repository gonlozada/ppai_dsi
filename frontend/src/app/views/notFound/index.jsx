import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-full-screen w-full">
      <div className="flex-column justify-center items-center max-w-770">
        <h3 className="mb-12 w-full justify-center items-center ml-6">
          The page you’re looking for was removed or got lost in space.{" "}
        </h3>
        <Link to="/">
          <Button className="capitalize" variant="contained" color="primary">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
