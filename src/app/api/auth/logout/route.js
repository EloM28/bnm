export async function POST(request) {
    try {
        if (request.method == 'POST') {
            const response = new Response(JSON.stringify({ message: "Success" }));
            response.cookies.delete('token');
            return response;

        }
    }
    catch (error) {
        console.log('Try error', error)
        return new Response(JSON.stringify({ message: 'validation error' }));
    }
}
