// Import modul yang diperlukan
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Menentukan `__filename` dan `__dirname` untuk ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Membuat kompatibilitas dengan konfigurasi lama
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Menggabungkan ekstensi ESLint dan aturan tambahan
const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", // Konfigurasi untuk Next.js
    "next/typescript" // Dukungan TypeScript untuk Next.js
  ),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

// Ekspor konfigurasi ESLint
export default eslintConfig;
