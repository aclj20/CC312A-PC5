FROM node:18-alpine
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /usr/src/app
COPY package.json ./
RUN pnpm install
COPY . .
EXPOSE 4000
CMD ["pnpm", "start"]