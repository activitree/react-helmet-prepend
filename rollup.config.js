const babel = require("rollup-plugin-babel")

const pkg = require("./package.json")

const baseConfig = {
    input: "src/Helmet.js",
    plugins: [
        babel({
            exclude: "node_modules/**"
        })
    ],
    external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies)
    ]
};
 const options = [
    Object.assign(
        {
            output: {
                file: pkg.main,
                format: "cjs"
            }
        },
        baseConfig
    )
   /*,
    Object.assign(
        {
            output: {
                file: "es/Helmet.js",
                format: "esm"
            }
        },
        baseConfig
    )
    */
];

module.exports = options
