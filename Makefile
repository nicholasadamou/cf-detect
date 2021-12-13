CONTAINER_NAME ?= cf-detect
DOCKER_IMGE_NAME ?= nicholasadamou/cf-detect:latest

.PHONY: all
all: build

.PHONY: build
build:
	docker build -t $(DOCKER_IMGE_NAME) .
