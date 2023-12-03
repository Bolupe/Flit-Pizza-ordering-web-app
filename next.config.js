/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ["res.cloudinary.com"]
  }
}

const webpack = require('webpack')

const { parsed: myEnv } = require('dotenv').config({
  path:'/full/custom/path/to/env'
})
