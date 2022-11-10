import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -Cleaning Service`;
  }, [title]);
};
export default useTitle;
