export type PostTypes = {
    image: string;
    _id: string;
    likes: [];
    text: string;
    ownerId: string;
};

export type PostActionTypes = {
    type: string;
    action: PostDataType;
};

export type PostDataType = {
    userId?: string;
    text?: string;
    image?: string;
    postId?: string;
};
