import React from 'react';

import defaultIcon from './defaultIcon.png';

type PostIconPropsType = {
    imageUrl: string;
};
const PostIcon: React.FC<PostIconPropsType> = ({ imageUrl }) => (
    <div className="post-icon" style={{ backgroundImage: `url(${defaultIcon})` }}>
        <img className="post-icon__item" src={`${imageUrl}`} alt={imageUrl} />
    </div>
);

export default PostIcon;
