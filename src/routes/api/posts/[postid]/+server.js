import { SECRET_API_KEY } from '$env/static/private'

export const GET = async ({ request, url, params }) => {
    const authHeader = request.headers.get('Authorization');
    //console.log(SECRET_API_KEY);

    console.log(params);

    // if(authHeader != 'Test') {
    //     return new Response(JSON.stringify(
    //         { 
    //             message: 'Invalid Token' 
    //         }), 
    //         {
    //             status: 401
    //         });    
    // }

    // const limit = Number(url.searchParams.get('limit')) || 10;
    // const skip = Number(url.searchParams.get('skip')) || 0;

    // const postid = Number(params.postid ?? '0')

    // const res = await fetch(`https://dummyjson.com/posts/${limit}`);
    // const data = await res.json();
    
    // return new Response(JSON.stringify({data}), { status: 200 });

    return new Response(JSON.stringify(
        { 
            message: 'Hello world!!!' 
        }), 
        {
            status: 201
        });
}