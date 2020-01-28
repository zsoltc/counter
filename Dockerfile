FROM nikolaik/python-nodejs:python3.8-nodejs13

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN pip install Flask && npm install && npm run build

ENV FLASK_APP /usr/src/app/server/app.py
ENV FLASK_RUN_HOST 0.0.0.0

CMD ["flask", "run"]
