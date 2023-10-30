# Rappelz-Fetcher

A simple Rappelz API to GET,Insert or Update informations about the Rappelz Database, built with Express.

## Requirements

- Node.js
- MSSQL Server with Rappelz Database ( Arcadia, Telecaster, Auth )
- Port 3000 free ( else you will change it into the index.js )
- Terminal Knowedge

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/Derkino/Rappelz-Fetcher.git
   ```

2. Be sure you have a working MSSQL server on your Host

3. Be sure you have Node-JS installed on the Host

4. Go to the Cloned repository folder, then edit your creditential into the .env file

### Example of .env

- MSSQL_IP=127.0.0.1
- MSSQL_USER=sa
- MSSQL_PASSWORD=examplepass
- MSSQL_PORT=1433
- MSSQL_AUTH=Auth
- MSSQL_ARCADIA=Arcadia -> (Not implemented)
- MSSQL_TELECASTER=Telecaster
- MSSQL_API_KEY=ExampleKeyToUseInsertAndUpdateQueryKEEPITSECRET (Not implemented)
- RAPPELZ_AUTH_SALT=2011 (Not implemented)

5. Open a terminal into the cloned repository folder and run

   ```bash
   npm -i
   ```

   ```bash
   node index.js
   ```

6. Check the console to be sure the API is running

## If you have any question, feel free to ask.

## Documentation

### Here is a list of GET query : 

1. Be sure to replace :count by the number of row that you want to display

2. To use the API : you must put your Host IP before : exemple : 127.0.0.1:3000/rank/top/level/10

```bash 
/rank/top/level/:count > Select Rank by Level
```
```bash 
/rank/top/gold/:count > Select Rank by Gold
```
```bash
/rank/top/pkc/:count > Select Rank by Pkc
```
```bash
/rank/top/arena/:count > Select Rank by Arena Point
```

## Example with a local server :

#### WARNING : If you want to put this in a real Host you must replace 127.0.0.1 by the IP of the Host and, open the Port 3000 in the firewall

```bash
http://127.0.0.1:3000/api/get/test-connection > Test SQL Connection
```

```bash 
http://127.0.0.1:3000/api/get/rank/top/level/:count > Select Rank by Level
```
```bash 
http://127.0.0.1:3000/api/get/rank/top/gold/:count > Select Rank by Gold
```
```bash
http://127.0.0.1:3000/api/get/rank/top/pkc/:count > Select Rank by Pkc
```
```bash
http://127.0.0.1:3000/api/get/rank/top/arena/:count > Select Rank by Arena Point
```

```bash
http://127.0.0.1:3000/api/get/rank/top/huntaholic/:count > Select Rank by Huntaholic Point
```
