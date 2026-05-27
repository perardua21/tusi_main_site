# --- Stage 1: Build React App ---
FROM node:20 as build

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine

# 빌드된 React 파일을 Nginx의 서빙 폴더로 복사
COPY --from=build /app/dist /usr/share/nginx/html
# (만약 CRA를 쓴다면 /app/build 일 수 있습니다. Vite는 dist입니다.)

# Nginx 설정 파일 덮어쓰기
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]