import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend dari konfigurasi Next.js, TypeScript, dan Prettier
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ),

  // Aturan custom
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'all',
          semi: true,
          tabWidth: 2,
          singleQuote: true,
          printWidth: 80,
          endOfLine: 'auto',
          arrowParens: 'always',
          plugins: ['prettier-plugin-tailwindcss'],
        },
      ],
    },
  },
];

export default eslintConfig;
