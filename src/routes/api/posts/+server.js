import { SECRET_API_KEY } from '$env/static/private'

export const GET = async ({ request, url }) => {
    const authHeader = request.headers.get('Authorization');
    console.log(SECRET_API_KEY);

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

    const limit = Number(url.searchParams.get('limit') ?? '10')
    const skip = Number(url.searchParams.get('skip') ?? '0')

    const res = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
    const data = await res.json();
    
    return new Response(JSON.stringify(data), { status: 200 });

    // return new Response(JSON.stringify(
    //     { 
    //         message: 'Hello world!!!' 
    //     }), 
    //     {
    //         status: 201
    //     });
}

export const POST = async ({ request, url }) => {
    const authHeader = request.headers.get('Authorization');
    console.log(SECRET_API_KEY);

    if(authHeader != 'Test') {
        return new Response(JSON.stringify(
            { 
                message: 'Invalid Token' 
            }), 
            {
                status: 401
            });    
    }

    const body = await request.json();
    console.log(body);

    return new Response(JSON.stringify(body), { status: 200 });
}