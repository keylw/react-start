import dispacther from "../appDispatcher";
import * as authorApi from "../api/authorApi";
import actionType from "./actionType";

export function loadAuthors() {
  return authorApi.getAuthors().then(authors => {
    dispacther.dispatch({
      actionType: actionType.LOAD_AUTHORS,
      authors: authors
    });
  });
}
