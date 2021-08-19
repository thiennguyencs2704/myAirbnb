import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const useHeaderState = () => {
  const [headerState, setHeaderState] = useState(false);

  const { y } = useWindowScroll();

  useEffect(() => {
    if (y > 0) {
      setHeaderState(true);
    } else {
      setHeaderState(false);
    }
  }, [y, headerState]);

  return headerState;
};

export default useHeaderState;
