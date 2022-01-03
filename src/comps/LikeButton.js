import React, { useState} from 'react';


function LikeButton () {
    const [likes, setLikes] = useState(0);

    const handleIncrement = () => {
        setLikes(prevCount => prevCount + 1);
    }

    return (
        <div>
            <button className='btn' onClick={handleIncrement}>
                Likes{likes}
            </button>
        </div>
    );
};

export default LikeButton;
