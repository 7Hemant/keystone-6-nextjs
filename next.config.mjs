import withPreconstruct from "@preconstruct/next";

export default withPreconstruct({
  distDir: "build",
  experimental: {
    appDir: true,

    // without this, 'Error: Expected Upload to be a GraphQL nullable type.'
    serverComponentsExternalPackages: ["graphql"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});
