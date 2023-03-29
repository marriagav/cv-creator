up:
	docker build -t cv-project .
	docker run -d -p 3000:3000 --name docker-test cv-project