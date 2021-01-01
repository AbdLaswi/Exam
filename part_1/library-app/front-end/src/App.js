import React, { useState, useEffect } from "react";
import GetBook from "./component/GetBook"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function App() {


  return (
    <Route>
      <Link to="/library">
        <GetBook />
      </Link>
      <Link to="/library/create_book">
        <GetBook />
      </Link>
    </Route>
  );
}
