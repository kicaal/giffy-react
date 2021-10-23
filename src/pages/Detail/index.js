import Gif from "components/Gif";
import Spinner from "components/Spinner";
import useSingleGif from "hooks/useSingleGif";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });
  const title = gif ? gif.title : "";
  const description = `Detail of ${title}`;
  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>{title} || Giffy</title>
          <meta name="description" content={description}></meta>
        </Helmet>
        <Spinner />
      </>
    );
  }
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <h3>{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
}
