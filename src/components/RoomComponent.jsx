import React, { useEffect, useState } from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

export default function RoomComponent() {
  const param = useParams().roomId;
  const [roomNum, setRoomNum] = useState("");
  const navigate = useNavigate();

  const handleBackUrl = () => {
    if (param === "1F_VS") {
      window.location.pathname = "1f";
    } else if (param === "2f_S201") {
      window.location.pathname = "2f";
    } else if (param === "2f_S204") {
      window.location.pathname = "2f";
    } else if (param === "2f_S206") {
      window.location.pathname = "2f";
    } else if (param === "3f_S301") {
      window.location.pathname = "3f";
    } else if (param === "3f_S303") {
      window.location.pathname = "3f";
    } else if (param === "3f_M301") {
      window.location.pathname = "3f";
    } else if (param === "3f_M302") {
      window.location.pathname = "3f";
    }
  };

  let QRImgUrl;

  if (param === "1F_VS") {
    QRImgUrl = "/imgs/QR/1F_VS.png";
  } else if (param === "2f_S201") {
    QRImgUrl = "/imgs/QR/2f_S201.png";
  } else if (param === "2f_S204") {
    QRImgUrl = "/imgs/QR/2f_S204.png";
  } else if (param === "2f_S206") {
    QRImgUrl = "/imgs/QR/2f_S206.png";
  } else if (param === "3f_S301") {
    QRImgUrl = "/imgs/QR/3f_S301.png";
  } else if (param === "3f_S303") {
    QRImgUrl = "/imgs/QR/3f_S303.png";
  } else if (param === "3f_M301") {
    QRImgUrl = "/imgs/QR/3f_M301.png";
  } else if (param === "3f_M302") {
    QRImgUrl = "/imgs/QR/3f_M302.png";
  }

  useEffect(() => {
    if (param === "1F_VS") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/SVmW6CcMBbIwlZUe"
      );
    } else if (param === "2f_S201") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/oNQFvS2svekVpHuX"
      );
    } else if (param === "2f_S204") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/I3AfkMb36NiyVT5x"
      );
    } else if (param === "2f_S206") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/gVFfxd9ruhEdS8ZL"
      );
    } else if (param === "3f_S301") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/BGqNJ8RqYd_9FGNO"
      );
    } else if (param === "3f_S303") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/Dz_20rfG6ywSUigc"
      );
    } else if (param === "3f_M301") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/-GCHniyhR20jchNp"
      );
    } else if (param === "3f_M302") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/qxJj_OeCMn0ox0fZ"
      );
    }
  }, []);

  return (
    <div className="w-[80%] h-full relative">
      <iframe className="w-full h-full z-[8]" src={roomNum}></iframe>
      <div>
        <button className="absolute bottom-4 left-4 z-10 bg-white text-4xl">
          <img className="w-[80px] h-[80px]" src={QRImgUrl} alt="QR CODE" />
        </button>
      </div>

      <button
        className="absolute bottom-4 right-4 z-10 bg-white text-7xl"
        onClick={handleBackUrl}
      >
        <AiOutlineRollback />
      </button>
    </div>
  );
}
