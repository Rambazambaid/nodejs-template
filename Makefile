.PHONY: install dev lint lint-fix env

install:
	npm install

dev:
	npm run dev

lint:
	npm run lint

lint-fix:
	npm run lint:fix

env:
	touch .env

clean:
	rm -rf ./node_modules
	rm -rf ./.build
	npm cache clean --force
	npm install

help:
	@echo "Доступные команды:"
	@echo "	make install - установка зависимостей"
	@echo "	make dev - запуск проекта в dev режиме"
	@echo "	make lint - запуск линтера"
	@echo "	make lint-fix - запуск линтера + исправление ошибок"
	@echo "	make env - создание env файла"
	@echo "	make clean - переустановка зависимостей"
