
## Inicializando el proyecto

```sh
touch server.js README.md .env .env.example .gitignore && mkdir controllers models middlewares data routers public && npm init -y && npm i express express-validator mongoose multer cors && npm i nodemon dotenv -D
```

## Uso del proyecto

1. Bajan el zip (GitHub o Drive)
2. Copian el .env.example
3. Lo renombran a .env
4. Le agregan el puerto. PORT=8080
5. npm i
6. npm run dev

## Hacer el backup de mi DB local y llevarlo a la remota

Posicionaros en el directorio donde queremos hacer el dump

```sh
mongodump --db bc_ecommerce
```

Hacemos el restore del dump local en la DB remota

```sh
mongorestore --uri "mongodb+srv://cluster-it.jslcx1i.mongodb.net/" --username mprincipe --nsInclude bc_ecommerce.* dump
```

## Entrega

* Dirección Back: https://maxi-etapa-3.onrender.com/api/productos
* Dirección de Mongo: (No es necesaria)
* Dirección Front: 
