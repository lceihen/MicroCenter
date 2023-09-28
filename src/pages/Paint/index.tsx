import { useEffect, useState } from "react";
import WujieReact from "wujie-react";
const Paint = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);
  const url = `${location.protocol}//canvas.abclive.cloud`;
  return visible ? (
    <WujieReact
      name="paintsubs"
      width="100%"
      height="100%"
      url={url}
    ></WujieReact>
  ) : null;
};
export default Paint;
