import { ClearCommentsAction, GetNextDataAction, LoadCommentsAction, LoadNextCommentsAction, LoadPostAction } from "../Actions/PostActions";

const iState={
    posts: [],
    nextData: [],
    comments: [],
    nextComments: []
}

const PostReducer = (state = iState, action)=>{
    switch (action.type) {
        case LoadPostAction:
            return  { 
                ...state, posts: [...action.payload]
            }

        case GetNextDataAction:
            return { ...state, nextData: [ ...state.nextData, ...action.payload] }
        
        case LoadCommentsAction:
            return { ...state, comments: [...action.payload] }
        
        case LoadNextCommentsAction: 
        return { ...state, nextComments: [...state.nextComments, ...action.payload ]}

        case ClearCommentsAction:
            return { ...state, comments: [], nextComments: []}
        default:
            return state
    }
}

export default PostReducer