import { useParams } from "react-router-dom";

const PosstId = () => {
  let params = useParams();
  return <p>PostID: {params.postId}</p>;
};

export default PosstId;