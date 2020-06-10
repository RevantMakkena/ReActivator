import React, {
  useState,
  useEffect,
} from "../../node_modules/@types/react";
import {Grid} from "../../node_modules/@material-ui/core";
import axios from "../../node_modules/axios";
import {Posts} from "./Posts";
import {PaginationComponent} from "./Pagination";

export const PaginationEntry = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };
  return (
    <Grid container spacing={3}>
      <Grid item md={3}></Grid>
      <Grid item md={6}>
        <h4 style={{color: "blue"}}>Pagination Example</h4>
        <Posts posts={currentPosts} loading={loading} />
        <PaginationComponent
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </Grid>
      <Grid item md={3}></Grid>
    </Grid>
  );
};
