import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hangARoo from "../../assets/hang.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="text-center p-4 flex items-center justify-center h-screen bg-yellow-600">
      <img src={hangARoo} alt="HangARoo" className="ml-4" />
    </div>
  );
};

export default SplashScreen;
