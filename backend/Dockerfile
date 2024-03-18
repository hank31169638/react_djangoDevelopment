# 使用官方 Python 运行时作为父镜像
FROM python:3.11

# 设置工作目录
WORKDIR /usr/src/app

# 将项目依赖文件复制到容器中
COPY requirements.txt ./

RUN pip install --upgrade pip
# 安装项目依赖
RUN pip install --no-cache-dir -r requirements.txt

# 复制项目文件到容器中
COPY . .

# 暴露端口，Django 默认为8000
EXPOSE 8000

# 启动 Django 应用
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
