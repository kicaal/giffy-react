import { useEffect, useRef } from "react";
export default function useSEO({ title, description }) {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(
    document.querySelector('meta[name="description"]').getAttribute("content")
  );

  useEffect(() => {
    if (title) {
      const previousTitle = prevTitle.current;
      document.title = `${title} | "Giffy"`;
      return () => (document.title = previousTitle);
    }
  }, [title]);

  useEffect(() => {
    const previousDescription = prevDescription.current;
    const metaDesc = document.querySelector('meta[name="description"]');

    if (description) {
      metaDesc.setAttribute("content", description);
    }
    return () => metaDesc.setAttribute("content", previousDescription);
  }, [description]);
}
