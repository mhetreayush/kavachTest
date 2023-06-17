import { useEffect, useState } from "react";

const useOfflineAlert = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOffline = () => {
      setIsOnline(false);
    };

    const handleOnline = () => {
      setIsOnline(true);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    const interval = setInterval(() => {
      setIsOnline(navigator.onLine);
    }, 2000); // Poll every 2 seconds

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!isOnline) {
      alert("You are offline. Please check your internet connection.");
    }
  }, [isOnline]);

  return isOnline;
};

export default useOfflineAlert;
