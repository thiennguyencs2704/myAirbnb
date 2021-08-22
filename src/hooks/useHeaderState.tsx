import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const useHeaderState = () => {
  const [headerState, setHeaderState] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(true);

  const { y } = useWindowScroll();

  useEffect(() => {
    if (y > 0) {
      setHeaderState(true);
    } else {
      setHeaderState(false);
    }
  }, [y]);

  useEffect(() => {
    setShowBookingForm(!headerState);
  }, [y]);

  return { headerState, showBookingForm, setShowBookingForm };
};

export default useHeaderState;
