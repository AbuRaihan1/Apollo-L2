// rollup.config.mjs
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/main.js",
  output: {
    file: "public/bundle.js",
    format: "esm",
  },
  plugins: [
    nodeResolve({ extensions: [".js", ".jsx"] }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
};
