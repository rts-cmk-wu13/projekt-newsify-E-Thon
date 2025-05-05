import { defineConfig } from "vite";
import getHtmlEntries from "./src/js/htmlRead.js";

export default defineConfig({
    base: './',
    css: {
        devSourcemap: true
    },
    build: {
      outDir: 'docs',
      target: 'esnext',
      rollupOptions: {
        input: getHtmlEntries()
      }
    },
    test: {
        workspace: [ 
          { 
            extends: true, 
            test: { 
              environment: 'jsdom', 
            }, 
          }, 
        ], 
      },
  })
