import { expandGlob } from "std/fs/expand_glob.ts";
import { createGenerator, type Preset } from "unocss-core";
import presetWind from "unocss-preset-wind";

export async function build() {
  const generator = createGenerator({
    presets: [presetWind() as unknown as Preset],
    shortcuts: { "link": "text-grammy hover:underline" },
    theme: {
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
        "translucentbackground": "var(--translucentbackground)",
        "altbackground": "var(--altbackground)",
        grammy: "#009dca",
      },
    },
  });
  const styles = new Array<string>();

  for await (const { path, isFile } of expandGlob("src/**/*")) {
    if (isFile) {
      const { css } = await generator.generate(await Deno.readTextFile(path));
      styles.push(css);
    }
  }

  await Deno.writeTextFile("./public/main.css", styles.join(""));
}