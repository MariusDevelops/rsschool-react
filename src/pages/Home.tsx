import "./Home.css";
import React, { Component } from "react";
import Search from "../compnents/Search";

interface HomeProps {}

interface HomeState {
  savedSearchTerm: string;
}

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      savedSearchTerm: "",
    };
  }

  componentDidMount() {
    if (typeof localStorage !== "undefined") {
      const storedTerm = localStorage.getItem("savedSearchTerm");
      if (storedTerm) {
        this.setState({ savedSearchTerm: storedTerm });
      }
    }
  }

  shouldComponentUpdate(nextProps: HomeProps, nextState: HomeState) {
    const { savedSearchTerm } = this.state;
    return savedSearchTerm !== nextState.savedSearchTerm;
  }

  setSavedSearchTerm = (term: string) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("savedSearchTerm", term);
    }
    this.setState({ savedSearchTerm: term });
  };

  render() {
    const { savedSearchTerm } = this.state;

    return (
      <div>
        <div className="section top-section">
          <Search
            savedSearchTerm={savedSearchTerm}
            setSavedSearchTerm={this.setSavedSearchTerm}
          />
        </div>
        <div className="section bottom-section">
          <h2>Bottom Section</h2>
          <p>This is the bigger bottom section.</p>
        </div>
      </div>
    );
  }
}

export default Home;
