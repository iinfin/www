export async function GET() {
	const data = {
		rand: Number(Math.random().toFixed(3)),
	};

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: {
			'content-type': 'application/json',
		},
	});
}
