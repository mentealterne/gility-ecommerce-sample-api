# Description
This is just a showcase built w NestJS + Typescript of a read-only api-controller which fetches data from various csv files and returns it.

## Installation
1) Download the repo
2) Run `yarn install`
3) Run `yarn run start:dev`
4) Open `http://localhost:3000/` in your browser
5) `yarn build` to build the project if you need to

## Usage
The api-controller is available at `http://localhost:3000/api/v1` and has the following endpoints:
- `http://localhost:3000/api/v1/ecommerce/{users,orders,items}` - returns a list of all users, orders or items
- `http://localhost:3000/api/v1/ecommerce/{users,orders,items}/{id}` - returns a single user, order or item by id
