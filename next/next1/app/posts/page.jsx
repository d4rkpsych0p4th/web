
//Desde import alias
import PostCard from '@/components/PostCard'

//Desde CSS
import './Posts.css'
async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
    }
    async function PostPages() {
    const posts = await loadPosts()
   
    return (
        <div className='grid'>
            {
                posts.map(post => (
                    <PostCard post={post} key={post.id} />
                ))
            }
        </div>
    )

    }
    export default PostPages