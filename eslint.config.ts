import js from '@eslint/js'
import pluginVueI18n from '@intlify/eslint-plugin-vue-i18n'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import { globalIgnores } from 'eslint/config'
import * as pluginImportX from 'eslint-plugin-import-x'
import pluginOxlint from 'eslint-plugin-oxlint'
import pluginPrettier from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfigWithVueTs(
  globalIgnores([
    '**/dist/**',
    '**/dist-ssr/**',
    '**/coverage/**',
    '**/*.d.ts',
    '.claude/**',
    '.github/**',
    'pnpm-lock.yaml',
  ]),

  // ── Core ─────────────────────────────────────────────────────────────────
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  // Disables core ESLint rules that TypeScript already enforces (no-undef, etc.)
  tseslint.configs.eslintRecommended,

  // ── Type-aware TypeScript rules ───────────────────────────────────────────
  // recommendedTypeChecked applied globally, then disabled for non-TS files below
  // (the official typescript-eslint pattern for mixed-file projects)
  vueTsConfigs.recommendedTypeChecked,

  // i18n plugin registers vue-eslint-parser for locale files (.json/.yaml) —
  // disable type-checked rules there since TS project service can't type-check them
  {
    files: ['**/*.{json,yaml,yml}'],
    ...tseslint.configs.disableTypeChecked,
  },

  // ── Type-aware parser + globals (TS/Vue files only) ───────────────────────
  {
    name: 'app/ts-parser',
    files: ['**/*.{vue,ts,mts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        // TypeScript Language Service API — faster than project:true, auto-discovers tsconfig
        projectService: true,
      },
    },
    rules: {
      // no-unsafe-* are noisy on any-typed external libs — downgrade to warn
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      // Enforce import type for type-only imports
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      // Prefer ?. over a && a.b chains
      '@typescript-eslint/prefer-optional-chain': 'warn',
      // Prefer ?? over || for nullable values (avoids 0/"" treated as falsy)
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      // False positive on const { t } = useI18n() — Vue Composition API pattern
      '@typescript-eslint/unbound-method': 'off',
    },
  },

  // ── Imports ──────────────────────────────────────────────────────────────
  // Manual plugin registration avoids ecmaVersion type mismatch in flatConfigs
  {
    name: 'app/import-x',
    plugins: { 'import-x': pluginImportX },
    rules: {
      'import-x/no-duplicates': 'warn',
      'import-x/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },

  // ── Vue i18n ─────────────────────────────────────────────────────────────
  // @intlify types set ecmaVersion as number, not the strict EcmaVersion union
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(pluginVueI18n.configs['flat/recommended'] as any[]),
  {
    name: 'app/i18n',
    settings: {
      'vue-i18n': {
        localeDir: './src/locales/*.json',
        messageSyntaxVersion: '^11.0.0',
      },
    },
    rules: {
      '@intlify/vue-i18n/no-raw-text': 'off',
      '@intlify/vue-i18n/no-v-html': 'off',
      '@intlify/vue-i18n/no-dynamic-keys': 'off',
      '@intlify/vue-i18n/no-html-messages': 'off',
      '@intlify/vue-i18n/no-missing-keys-in-other-locales': 'error',
    },
  },

  // ── Vue SFC style ─────────────────────────────────────────────────────────
  {
    name: 'app/vue-style',
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
    },
  },

  // ── Per-file overrides ───────────────────────────────────────────────────
  {
    name: 'app/pages',
    files: ['src/pages/**/*.vue', 'src/layouts/**/*.vue', 'src/components/ui/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
    },
  },

  // ── Oxlint bridge (must be before prettier) ───────────────────────────────
  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  // ── Prettier (last — overrides all formatting rules) ─────────────────────
  pluginPrettier
)
