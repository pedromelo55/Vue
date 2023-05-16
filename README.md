# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Padrão de branchs e merge requests

### Nomes de branchs

{tipo-atividade}_{identificador-gestao}

* feat
* fix
* hotfix

ex: *feat_redmine12*

### Merge requests

1. Ao iniciar uma tarefa, se recomenda mudar para a branch de develop:

git checkout develop

2. Após isso garanta que a branch local esteja atualizada com a branch remota:

git pull origin develop

3. Crie a branch na qual resolverá a atividade seguindo os padrões de nomes de branchs

git checkout -b {branch-tarefa}

4. Ao finalizar a tarefa, faça o commit localmente

git add .
git commit -m "{mensagem-commit}"

5. Atualize sua branch de sprint local com a branch de sprint remota

git checkout develop
git pull origin develop

6. Retorne a sua branch da tarefa e faça o rebase com a branch da sprint

git checkout {branch-tarefa}
git rebase develop

7. Faça o push para a branch remota

git push origin {branch-tarefa}

8. Abra o Merge Request contendo a branch da tarefa como origem e a branch develop, o destino
