# New Balena App

### Goals

Easily create a balena starter project with a single command which includes an API and UI.

The API can play speakers through the devices audio port if it has one.

### Development

Add the ip address of your development device to the `.env` file, e.g.

```
# .env
REACT_APP_LIVE_IP=192.168.1.xxx
```
In VS Code, you can just run the `Dev` task (Ctrl+Shift+R -> Live)

---

Or alternatively, you start the processes yourself in your terminal:

Start client development server

```shell
cd client
npm run watch
```

Then, in another terminal compile/watch server typescript files:

```
cd server
npm run watch
```


Then, another terminal, start the balena live-push server:

```
cd server
npm run live
```
