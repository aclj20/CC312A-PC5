FROM node:18-alpine
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm run build
EXPOSE 4173
CMD ["pnpm", "run", "preview", "--", "--host", "0.0.0.0"]