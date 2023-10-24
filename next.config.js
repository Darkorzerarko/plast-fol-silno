/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // JAK USUNĘ/ZMIENIĘ BASE PATH TO MUSZĘ TEŻ ZMIENIĆ W STYLACH URL'E
    basePath: '/plast-fol-silno',

    images: { 
        unoptimized: true,
    },

    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'styles')],
    //   }
}

module.exports = nextConfig
