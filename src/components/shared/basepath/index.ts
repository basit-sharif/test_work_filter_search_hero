const basePath = process.env.NODE_ENV ==="development"
?process.env.NEXT_PUBLIC_API_BASE_PATH_PRODUCTION
:process.env.NEXT_PUBLIC_API_BASE_PATH_DEVELOPMENT

export default basePath