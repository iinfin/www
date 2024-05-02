# U29DC

![GitHub](https://img.shields.io/github/license/iinfin/www)
![GitHub workflow (prchecks)](https://img.shields.io/github/actions/workflow/status/iinfin/www/prchecks.yml?logo=github&label=checks)
![GitHub workflow (release)](https://img.shields.io/github/actions/workflow/status/iinfin/www/release.yml?logo=github&label=release)
![GitHub release](https://img.shields.io/github/v/release/iinfin/www)

```
.
├── .github                         # GitHub folder
│   ├── ISSUE_TEMPLATE              # GitHub issue templates
│   ├── PULL_REQEUST_TEMPLATE       # GitHub pull request template
│   ├── workflows                   # GitHub Actions workflows
│   │   ├── prchecks.yml            # Run checks on pull requests
│   │   ├── prlabels.yml            # Add labels to pull requests
│   │   ├── release.yml             # Automate release management
│   └── prlabels.yml                # PR label options
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src                             # Main source of the app
│   ├── app                         # Using Next.js 13 appDir
│   │   ├── api                     # APIs
│   │   ├── components              # Main compnents
│   │   ├── hooks                   # React hooks
│   │   ├── lib                     # Library utils
│   │   ├── styles                  # Global styles
│   │   ├── utils                   # Utility functions
│   │   └── (pages)                 # Subpages grouped for organization
│   └── middleware.ts               # Middleware for Next.js
│
├── .browserslistrc                 # https://github.com/browserslist/browserslist#config-file
├── .commitlintrc.js                # https://commitlint.js.org/#/reference-rules
├── .eslintrc.js                    # https://eslint.org/docs/user-guide/configuring
├── .lintstagedrc.js                # https://github.com/okonet/lint-staged#configuration
├── .prettierrc.js                  # https://prettier.io/docs/en/configuration.html
├── .stylelintrc.js                 # https://stylelint.io/user-guide/configure
├── netlify.toml                    # https://docs.netlify.com/configure-builds/file-based-configuration
├── next.config.js                  # https://nextjs.org/docs/api-reference/next.config.js/introduction
├── package.json                    # https://docs.npmjs.com/cli/configuring-npm/package-json
├── postcss.config.js               # https://github.com/postcss/postcss#usage
├── tailwind.config.js              # https://tailwindcss.com/docs/configuration
├── tsconfig.json                   # https://typescriptlang.org/docs/handbook/tsconfig-json
├── vercel.json                     # https://vercel.com/docs/concepts/projects/project-configuration
│
├── CHANGELOG
├── CODE_OF_CONDUCT
├── CONTRIBUTING
├── LICENSE
├── README
├── SECURITY
└── SUPPORT

```
