
//Desde import alias
import PostCard from '@/components/PostCard'

//Desde CSS
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
                    <PostCard post={users} key={users.id} />
                ))
            }
        </div>
    )

    }
    export default PostPages