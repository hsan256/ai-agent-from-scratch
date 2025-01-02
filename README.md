# Build an AI Agent from Scratch

## Setup Instructions

This repo requires **Node.js version 20+** or **bun v1.0.20**.

The `main` branch contains the final application. You will also need an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys).

```bash
git clone https://github.com/hsan256/ai-agent-from-scratch.git
cd ai-agent-from-scratch
npm install # or bun install
```

To run the project:

```bash
npm start
# or
bun run index.ts
```

## OpenAI API Key

Create an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys) and save it in a `.env` file:

```
OPENAI_API_KEY='YOUR_API_KEY'
```

## Upstash Account
A free [Upstash account](https://upstash.com/) is required for hosting a serverless vector database.

## Windows Environments
The dynamic imports may be incompatible depending on the windows environment, so you may need to run the evals directly. Add the environment import to the top of each eval:

## Running Evaluations

### Linux and macOS

To run a single evaluation, use the following command:

```bash
npm run eval "[name]"
```

### Windows

```bash
npx tsx evals\experiments\"[name].eval.tsx"
```

## Other Evaluation Methods

Refer to the [AutoEvals documentation](https://github.com/braintrustdata/autoevals) for more details on configuring and running these evaluations.

### Future Support

We are continuously working to expand the evaluation methods supported by this project. Stay tuned for updates and additional features in future releases.