import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js'
  },
  plugins: [
    typescript({
      include: ['src/**/*'],
      tsconfig: './tsconfig.json',
      outDir: 'dist/',
      declaration: true,
      declarationDir: 'dist/'
    }),
    resolve()
  ]
}
