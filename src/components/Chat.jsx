import axios from "axios";
import { useEffect, useState } from "react";

const Chat = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/chat");
        if (res.data) {
          setResult(res.data);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: result }} />;
};

export default Chat;
