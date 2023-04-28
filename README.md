En en presente repositorio se encuentra un ejemplo basico de como se maneja el stage de test con github actions,
El proyecto cuenta con la estructura basica de una api desarrollada con las tecnologias de Node JS & Express
para hacer uso de ella ejecutamos el comando 
```
npm install
```
ademas como debemos observar se encuentra una carpeta de test donde para ello se utilizaron las librerias de jest & supertest

### flujo basico

al realizar un cambio a la rama main ya se a de tipo push o pull-request el workflow tomara iniciativa
y realizara el proceso del stage de test, el cual se encuentra detallado en el archivo .github/workflows/demo2.yml

para cada cambio que se realize se podra vizualisar en la opcion Actions un submenu con los trabajos que se han realizado, asi
como un historial del mismo, nosotros podemos ver a detalle como es que se ha comportado cada uno de estos y visualizar cada uno 
de los steps
