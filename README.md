# Инструкция по запуску проекта на VPS

1. **Подключение к серверу**
```
ssh root@YOUR_SERVER_IP # Получить на аккаунте reg.ru sh_zaira6018@mail.ru
```
Нужен будет пароль для доступа к серверу. (apple key chain)

2. **Установка необходимых пакетов**
```
  apt update && apt upgrade -y
```

3. **Установка unzip (если нужно для Bun)**

```
  sudo apt install unzip -y
```

4. **Установка Bun**
```
  curl -fsSL https://bun.sh/install | 
  source ~/.rc
  bun --version
```

5. **Установка PM2**
```
  npm install -g pm2
```


### Клонирование репозитория и установка зависимостей

1. **Клонирование репозитория**
```
  git clone https://github.com/RamazanIttiev/drobi.school.bot
  cd drobi.school.bot
```

2. **Установка зависимостей**
```
  bun install
```

3. **Запуск бота**
```
  pm2 delete all || true
  pm2 start "bun run start" --name drobi.school.bot
  pm2 save
  pm2 startup
```

4. **Проверка статуса бота**
```
  pm2 logs my-bot
```