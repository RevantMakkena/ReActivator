import React, {useState, useEffect} from "react";
import {getApiPosts, deleteApiPost} from "./Api";
import {ToastContainer, toast} from "react-toastify";
import {Modal} from "@material-ui/core";
import "react-toastify/dist/ReactToastify.css";
import {BarLoader} from "react-spinners";
import {AllPosts} from "./AllPosts";
import {EditPost} from "./EditPost";

const AppEntry = () => {
  const [posts, setPosts] = useState([]);
  const [deleteLoading, setDeleteLoading] = useState("none");
  const [editPost, setEditPost] = useState(false);
  const [editPostData, setEditPostData] = useState({});
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
    setEditPostData(currentEditablePost);
    setOpen(true);
  };
  const deletePost = (id) => {
    const delPost = async () => {
      setDeleteLoading("block");
      const res = await deleteApiPost(id);
      setDeleteLoading("none");
      if (res && res.status === 200) {
        const modifiedPosts = posts.filter((post, index) => {
          return post.id !== id;
        });
        setPosts(modifiedPosts);
      } else {
        apiToast(404);
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

  const closePopup = () => {
    setOpen(false);
  };

  const updatePost = (data) => {
    setDeleteLoading("block");
    setTimeout(() => {
      let indexOfPost = posts.findIndex((post) => post.id == data.id);
      posts[indexOfPost].title = data.title;
      posts[indexOfPost].body = data.body;
      setPosts(posts);
      setDeleteLoading("none");
      closePopup();
      apiToast("Your data has been successfully updated!!", 200);
    }, 3000);
  };

  return posts ? (
    <>
      <div style={{display: deleteLoading}}>
        <BarLoader height={5} width={2000} />
      </div>
      <ToastContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        style={{
          background: "olive",
          marginTop: "20%",
          width: "40%",
          height: "35%",
          marginLeft: "30%",
        }}>
        <EditPost
          record={editPostData}
          onPopupClose={closePopup}
          updatedPost={updatePost}
        />
      </Modal>
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
