import React from "../../node_modules/@types/react";
import {Paper} from "../../node_modules/@material-ui/core";

export const Posts = ({posts, loading}) => {
  if (loading) return <div>Loading</div>;

  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <>
      {posts.map((post) => {
        return (
          <Paper
            key={post.id}
            style={{
              height: "30px",
              padding: "15px",
              marginTop: "10px",
              border: "0.5px solid green",
            }}>
            <i
              class='fas fa-caret-square-right'
              style={{color: getRandomColor()}}></i>
            {"   "}
            {post.title}
          </Paper>
        );
      })}
    </>
  );
};
