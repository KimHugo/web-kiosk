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
    } else if (param === "1fRoom2") {
      window.location.pathname = "1f";
    } else if (param === "1fRoom3") {
      window.location.pathname = "1f";
    }
  };

  let QRImgUrl;

  if (param === "1F_VS") {
    QRImgUrl = "/imgs/QR/1F_VS.png";
  }

  useEffect(() => {
    if (param === "1F_VS") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/SVmW6CcMBbIwlZUe"
      );
    } else if (param === "2fS201") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/oNQFvS2svekVpHuX"
      );
    } else if (param === "2fS204") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/I3AfkMb36NiyVT5x"
      );
    } else if (param === "2fS206") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/gVFfxd9ruhEdS8ZL"
      );
    } else if (param === "3fS301") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/GAuhMVVPgy_qeHro"
      );
    } else if (param === "3fS303") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/Dz_20rfG6ywSUigc"
      );
    } else if (param === "3fM301") {
      setRoomNum(
        "https://twinmotion.unrealengine.com/panorama/-GCHniyhR20jchNp"
      );
    } else if (param === "3fM302") {
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
        className="absolute bottom-4 right-4 z-10 bg-white text-4xl"
        onClick={handleBackUrl}
      >
        <AiOutlineRollback />
      </button>
    </div>
  );
}
