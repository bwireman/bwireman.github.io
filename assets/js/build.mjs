import esbuild from "esbuild"
import esgleam from "esgleam"

esbuild.build({
    entryPoints: ['./src/main.gleam', '../styles.css'],
    bundle: true,
    outdir: 'out',
    minify: true,
    plugins: [esgleam.esgleam({ main_function: "main", project_root: "." })],
}).catch(() => process.exit(1))
