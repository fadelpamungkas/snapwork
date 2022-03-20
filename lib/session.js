// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
export const sessionOptions = {
	password: "2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPr8",
	cookieName: "session/snapwork",
	cookieOptions: {
		secure: process.env.NODE_ENV === "production",
	},
};
