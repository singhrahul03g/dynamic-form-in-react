import { useContext } from "react"
import { PostContext } from "../pages/DisplayData";

function DisplayPosts() {

    const posts = useContext(PostContext);
if(posts.length){
    return (
        <>
    
        <ul>
    {
        posts.length && posts.map((post)=>{
            return<li key = {post.id}>
        <h4> Post Title: {post.title}!</h4>
          <p>Post Body:{` ${post.body} `}</p>
            </li>
        })
      
            }
           </ul>
        </>
      )
}else{
    return(<>
    
    <h2>Data Not Found</h2></>)
}
  
}

export default DisplayPosts
