import Gif from "components/Gif";
import { useGifs } from "hooks/useGifs";

export default function Detail({ params }) {
  const { gifs } = useGifs();
  const gif = gifs.find((singleGif) => singleGif.id === params.id);
  return <Gif {...gif} />;
}
