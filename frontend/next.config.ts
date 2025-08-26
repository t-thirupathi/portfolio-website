const nextConfig = {
  async rewrites() {
    return process.env.NODE_ENV === "development"
      ? [
          {
            source: "/api/:path*",
            destination: "http://localhost:8000/:path*",
          },
        ]
      : [
          {
            source: "/api/:path*",
            destination:
              "https://fastapi-backend-821854861628.us-central1.run.app/:path*",
          },
        ];
  },
};
export default nextConfig;
