import React, { useReducer, useState } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `blog post #${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

// const addBlogPost = () => {
//   dispatch({ type: "add_blogpost" });
// }

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);