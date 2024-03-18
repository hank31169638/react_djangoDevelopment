## 使用官方 Node.js 运行时作为父镜像
#FROM node:16
#
## 设置工作目录
#WORKDIR /usr/src/app
#
## 复制项目依赖文件到容器中
#COPY package*.json ./
#
## 安装项目依赖
#RUN npm install
#
## 复制项目文件到容器中
#COPY . .
#
## 构建应用
#RUN npm run build
#
## 使用 nginx 作为 web 服务器
#FROM nginx:alpine
#
#COPY --from=0 /usr/src/app/build /usr/share/nginx/html
#COPY custom-nginx.conf /etc/nginx/conf.d/default.conf
#
## 暴露端口，nginx 默认为80
#EXPOSE 80
#
## 通过 nginx 启动服务
#CMD ["nginx", "-g", "daemon off;"]


# 測試環境

FROM node:alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
