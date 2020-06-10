import React, {useState, useEffect} from "react";
import {getApiPosts, deleteApiPost} from "./Api";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BarLoader} from "react-spinners";
import {AllPosts} from "./AllPosts";
import {EditPost} from "./EditPost";

const AppEntry = () => {
  const [posts, setPosts] = useState([]);
  const [deleteLoading, setDeleteLoading] = useState("none");
  const [editPost, setEditPost] = useState(false);
  const [editPostId, setEditPostId] = useState({});
  useEffect(() => {
    const fetchPosts = async () => {
      const {data, status} = await getApiPosts();
      apiToast("Posts are received successfully!!", status);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const editApiPost = (id) => {
    setEditPost(true);
    const currentEditablePost = posts.find((post) => post.id === id);
    setEditPostId(currentEditablePost);
  };
  const deletePost = (id) => {
    const delPost = async () => {
      setDeleteLoading("block");
      const res = await deleteApiPost(id);
      setDeleteLoading("none");
      if (res.status === 200) {
        const modifiedPosts = posts.filter((post, index) => {
          return post.id !== id;
        });
        setPosts(modifiedPosts);
      }
      apiToast("Post is deleted successfully!!", res.status);
    };
    delPost();
  };

  const apiToast = (message, id) => {
    if (id === 200) {
      toast.success(message, {
        position: toast.POSITION.TOP_LEFT,
      });
    } else {
      toast.error("Error while making API call!!", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  return editPost ? (
    <EditPost record={editPostId} />
  ) : posts ? (
    <>
      <div style={{display: deleteLoading}}>
        <BarLoader height={5} width={2000} />
      </div>
      <ToastContainer />
      <AllPosts
        posts={posts}
        deletePost={deletePost}
        editPost={editApiPost}
      />
    </>
  ) : (
    ""
  );
};

export default AppEntry;
