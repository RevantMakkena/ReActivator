import React from "react";
import {Paper} from "@material-ui/core";

export const Posts = ({posts, loading}) => {
  if (loading) return <div>Loading</div>;

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
            {post.title}
          </Paper>
        );
      })}
    </>
  );
};
