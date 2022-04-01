import esbuild from "esbuild"
import esgleam from "esgleam"
import { sassPlugin } from 'esbuild-sass-plugin'

esbuild.build({
    entryPoints: ['./src/main.gleam', '../styles.scss'],
    bundle: true,
    outdir: 'out',
    minify: true,
    plugins: [sassPlugin(), esgleam.esgleam({ main_function: "main", project_root: "." })],
}).catch(() => process.exit(1))
