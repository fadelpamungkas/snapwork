import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(userRoute, sessionOptions);

async function userRoute(req, res) {
	if (req.session.userData) {
		// in a real world application you might read the user id from the session and then do a database request
		// to get more information on the user if needed
		res.json({
			...req.session.userData,
			isLoggedIn: true,
		});
	} else {
		res.json({
			isLoggedIn: false,
			user: "",
		});
	}
}
