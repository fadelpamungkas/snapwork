/** @type {import('next').NextConfig} */

const securityHeaders = [
	{
		key: "Referrer-Policy",
		value: "origin-when-cross-origin",
	},
];

module.exports = {
	reactStrictMode: true,
	images: {
		domains: [
			"images.unsplash.com",
			"cdn.tuk.dev",
			"snapworkupload.s3.ap-southeast-1.amazonaws.com",
		],
	},
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: "/:path*",
				headers: securityHeaders,
			},
		];
	},
};
