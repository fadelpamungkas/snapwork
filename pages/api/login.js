import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req, res) {
	const userData = await req.body;

	try {
		const userSession = { isLoggedIn: true, userData };
		req.session.userData = userSession;
		await req.session.save();
		res.json(userSession);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}
