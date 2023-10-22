import React, { useEffect, useState } from 'react';
import { AiOutlineRollback } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';

export default function RoomComponent() {
    const param = useParams().roomId;
    const [roomNum, setRoomNum] = useState("")
    const navigate = useNavigate();
    
    const handleBackUrl = () => {
        if(param === "1fRoom1") {
            window.location.pathname = "1f"
        } else if(param === "1fRoom2") {
            window.location.pathname = "1f"
        } else if(param === "1fRoom3") {
            window.location.pathname = "1f"
        }
    };

    useEffect(() => {
        if(param === "1fRoom1") {
            setRoomNum("https://twinmotion.unrealengine.com/panorama/SVmW6CcMBbIwlZUe")
        } else if(param === "1fRoom2") {
            setRoomNum("https://twinmotion.unrealengine.com/panorama/3vecGkz2XnlONmpd")
        } else if(param === "1fRoom3") {
            setRoomNum("https://twinmotion.unrealengine.com/panorama/2pnT-SEjIPsHFhbv")
        }
    }, [])
    
    return (
        <div className='w-full h-full relative'>
            <iframe className="w-full h-full z-[8]" src={roomNum}></iframe>
            <div>
                <button className='absolute bottom-4 left-4 z-10 bg-white text-4xl'>QR code</button>
            </div>

            <button className='absolute bottom-4 right-4 z-10 bg-white text-4xl' onClick={handleBackUrl}><AiOutlineRollback /></button>
        </div>
    );
}

