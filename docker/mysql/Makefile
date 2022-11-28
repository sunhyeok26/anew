build:
	docker build -t mysql .
run:
	docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234 -v /Users/bitcamp/Documents/GitHub/docker/mysql:/app --name=mysql mysql
exec:
	docker exec -it mysql /bin/bash
ps:
	docker ps -a
img:
	docker images
rm:
	docker rm -f $$(docker ps -aq)
rmi:
	docker rmi $$(docker images -q)

