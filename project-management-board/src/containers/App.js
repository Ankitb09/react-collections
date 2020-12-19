import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Board from "./Board";
import Header from "../components/Header/Header";
import Ticket from "../containers/Tickets";
import data from "../assets/data.json";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    console.log("data", data);
    const lanes = [
      { id: 1, title: "To Do" },
      { id: 2, title: "In Progress" },
      { id: 3, title: "Review" },
      { id: 4, title: "Done" }
    ];

    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <Board lanes={lanes} data={data} />
          <Ticket data={data} />
        </AppWrapper>
      </>
    );
  }
}

export default App;
