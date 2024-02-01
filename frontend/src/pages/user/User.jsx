import { ToastContainer, toast } from "react-toastify";
import styles from "./user.module.css";
import Navbar from "../../layout/navbar/Navbar";
import NavMobile from "../../layout/NavMobile/NavMobile";
import Avatar from "./Avatar";
import Informations from "./Informations";
import VideoUser from "./VideoUser";
import { useInfosContext } from "../../UserContext";

function User() {
  const { userData } = useInfosContext();

  const { id } = userData;
  const { avatar } = userData;
  const notifyError = () => toast("Une erreur est survenue");
  const notifySuccessDeleteVideo = () =>
    toast("Votre vidéo a bien été supprimé");

  return (
    <div className="userPage">
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={styles.userAccount}>
        <Avatar id={id} />
        <Informations id={id} avatar={avatar} />
      </div>
      <VideoUser
        id={id}
        notifyError={notifyError}
        notifySuccessDeleteVideo={notifySuccessDeleteVideo}
      />
      <NavMobile />
    </div>
  );
}

export default User;
