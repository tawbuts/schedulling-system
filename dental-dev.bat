start call "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath /Users/Immortals/mongod-data
ping 127.0.0.1 -n 5 > nul
start nodemon app.js
ping 127.0.0.1 -n 120 > nul
start "" http://localhost:3000/schedule