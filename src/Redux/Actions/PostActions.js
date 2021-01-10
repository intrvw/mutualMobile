//Action Strings
export const LoadPostAction="LoadPosts"
export const GetNextDataAction = "NextData"
export const LoadCommentsAction = "LoadComments"
export const LoadNextCommentsAction = "NextComments"
export const ClearCommentsAction="ClearComments"

//Action methods
export const LoadPost=(posts)=>{
    return {
        type:LoadPostAction,
        payload: posts
    }
}

export const getNextData = (data) => {
    return {
        type: GetNextDataAction,
        payload: data
    }
}


export const LoadComments = (data) =>{
    return {
        type: LoadCommentsAction,
        payload: data
    }
}

export const getNextComments = (data) => {
    return {
        type: LoadNextCommentsAction,
        payload: data
    }
}

export const ClearComments=()=>{
    return {
        type: ClearCommentsAction
    }
}