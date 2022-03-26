import esbuild from "esbuild"
import esgleam from "esgleam"

esbuild.build({
    entryPoints: ['./src/main.gleam'],
    bundle: true,
    outfile: 'out.js',
    minify: true,
    plugins: [esgleam.esgleam({ main_function: "main", project_root: "." })],
}).catch(() => process.exit(1))
