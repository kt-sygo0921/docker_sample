FROM  node:latest

# 新規ユーザーを作成
RUN useradd --user-group --create-home --shell /bin/false app

# 環境変数を通す
ENV HOME=/home/app

# package.jsonをマウント/ユーザーappにルート読み書き権限がないため付与
WORKDIR $HOME/project/
COPY package.json $HOME/project/
RUN chown -R app:app $HOME/*


USER app
RUN npm install

CMD ["node","app.js"]

