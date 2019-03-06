import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {FETCH, FAILURE, SUCCESS, fetchChars} from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchChars()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <p>Loading</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  }
}
export default connect(
  mapStateToProps/* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetchChars
  }
)(CharacterListView);
