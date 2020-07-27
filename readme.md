<h2>Steps for running The Demo Contacts API</h2>

------
i. Ensure Typescript & Nodemon are <strong>globally</strong> installed
```
$ sudo npm install -g typescript && sudo npm install -g nodemon
```

ii. Create ENV file and <strong>Provide Values</strong> in ENV file
```
$ yarn setup-env
```

iii. Install Packages
```
$ yarn install
```

iv. Build from Source
```
$ yarn build
```

v. Test App
```
$ yarn test
```

vi. Start App
```
$ yarn start
```

------

<h2>Create Person/Contact & Search API</h2>

- Create People

Endpoint
```
(POST) http://127.0.0.1:5000/api/v1/people
```

Req Body
```
{
	"name": "Ultron",
	"age": 29,
	"height": "155"
}
```
---
- Create Contact

Endpoint
```
(POST) http://127.0.0.1:5000/api/v1/people/<PEOPLE_ID>/contacts
```

Req Body
```
{
	"email": "samsung@avengers.com",
	"number": "0178345212"
}
```

____

- Search

Endpoint
```
(GET) http://127.0.0.1:5000/api/v1/contacts?q=Ultron
```

