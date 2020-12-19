import React from "react";

const withDataFetching = WrappedComponent => {
  class WithDataFetchingclass extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        loading: true,
        error: ""
      };
    }
    async componentDidMount() {
      try {
        // const data = await fetch(this.props.datasource);
        // console.log(data);

        // const dataJSON = await data.json();

        if (this.props.data) {
          this.setState({
            data: this.props.data,
            loading: false
          });
        }
      } catch (e) {
        this.setState({
          data: [],
          loading: false,
          error: e.message
        });
      }
    }

    render() {
      const { data, loading, error } = this.state;
      return (
        <WrappedComponent
          data={data}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  }

  WithDataFetchingclass.displayName = `WithDataFetching(${WrappedComponent.name})`;
  return WithDataFetchingclass;
};

export default withDataFetching;
