import { useEffect, useState } from "react";
import WujieReact from "wujie-react";
import { isProd } from "@/utils";
const authAdmin = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const url = `${location.protocol}//admin.abclive.cloud`;

  console.log(url);
  return visible ? (
    <WujieReact
      name="paintsubs"
      width="100%"
      height="100%"
      url={url}
      props={{
        realWindow: window,
      }}
    ></WujieReact>
  ) : null;
};
export default authAdmin;
