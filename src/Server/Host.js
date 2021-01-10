import { getNextComments, getNextData, LoadComments, LoadPost } from "../Redux/Actions/PostActions"

export const host="http://jsonplaceholder.typicode.com/"
export const getOptions={
    method:"GET",
    redirect: "follow"
}

export const GetAllPosts=(dispatch)=>{
    fetch(`${host}posts/`,getOptions)
    .then((response)=> response.text())
    .then((result)=> { 
        const res = JSON.parse(result)
        dispatch(LoadPost(res))
        getNextPostLimit(res, 0, dispatch)
        
    })
    .catch(err=> console.log(err))
}

export const getNextPostLimit=(data, lastPos,dispatch)=>{
    dispatch(getNextData(data.slice(lastPos,lastPos+6)))
}

export const LoadCommentsForPost = (post, dispatch, setLoading) => {
    fetch(`${host}posts/${post.id}/comments`,  getOptions)
    .then((response) => response.text())
    .then((result) => {
        const data = JSON.parse(result)
        dispatch(LoadComments(data))
        // getNextCommentsLimit(data, 0, dispatch)
        setLoading(false)
    })
    .catch(err => console.log(err))
}

export const getNextCommentsLimit=(data, lastPos,dispatch)=>{
    dispatch(getNextComments(data.slice(lastPos,lastPos+6)))
}