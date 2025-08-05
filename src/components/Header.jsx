import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser, addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uId, displayName, email } = user;
        dispatch(addUser({ uId: uId, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute 2xl:right-4/5 lg:right-2/4 z-10 ">
      <img
        src={LOGO_URL}
        alt="Netflix logo"
        className="w-[5rem]  object-cover sm:w-24"
      />
    </div>
  );
};

export default Header;
