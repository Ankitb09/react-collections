import React from "react";
import styled from "styled-components";
import Lane from "../components/Lane/Lane";
import withDataFetching from "../withDataFetching";

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: []
    };
  }

  componentDidMount() {
    this.setState({ tickets: this.props.data });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ tickets: this.props.data });
    }
  }

  onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
    console.log(e, id);
  };

  onDragOver = e => {
    e.preventDefault();
  };

  onDrop = (e, laneId) => {
    const id = e.dataTransfer.getData("id");
    console.log("id", id);
    const tickets = this.state.tickets.filter(ticket => {
      if (ticket.id === id) {
        ticket.board = laneId;
      }
      return ticket;
    });

    this.setState({
      ...this.state,
      tickets
    });
  };

  render() {
    const { lanes, loading, error } = this.props;
    return (
      <BoardWrapper>
        {lanes.map(lane => (
          <Lane
            key={lane.id}
            laneId={lane.id}
            loading={loading}
            error={error}
            onDrop={this.onDrop}
            onDragOver={this.onDragOver}
            onDragStart={this.onDragStart}
            tickets={this.state.tickets.filter(item => item.lane === lane.id)}
            title={lane.title}
          />
        ))}
      </BoardWrapper>
    );
  }
}

export default withDataFetching(Board);
