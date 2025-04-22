import { defineConfig } from "vite";
	
export default defineConfig({
    base: './',
    css: {
        devSourcemap: true
    },
    build: {
      outDir: 'docs',
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
