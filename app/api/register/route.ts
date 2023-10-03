const baseUrl = "https://backend.getlinked.ai";

export async function POST(req: Request) {
	const body = await req.json();
	const res = await fetch(`${baseUrl}/hackathon/registration`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: body.email,
			phone_number: body.phone,
			team_name: body.team,
			group_size: body.size,
			project_topic: body.project,
			category: body.category,
			privacy_poclicy_accepted: body.privacy,
		}),
	});
	const data = await res.json();

	return Response.json(data);
}
