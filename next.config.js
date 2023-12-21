/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    
    // JAK USUNĘ/ZMIENIĘ BASE PATH TO MUSZĘ TEŻ ZMIENIĆ W STYLACH URL'E
    // basePath: '/plast-fol-silno',

    trailingSlash: true,
    // skipTrailingSlashRedirect: true,

    images: { 
        unoptimized: true,
    },
    
}

module.exports = nextConfig
