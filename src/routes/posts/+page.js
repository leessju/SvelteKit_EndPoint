
export const load = async ({ fetch }) => {
    const fetchPosts = async () => { 
        const res = await fetch('/api/posts');
        const data = await res.json();
        console.log(data);
        return data.posts;
    };
    
    return {
        posts: fetchPosts()
    }


};