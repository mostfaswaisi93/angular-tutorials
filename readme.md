# Angular Tutorials & Practice Projects

A collection of Angular practice projects built while learning and teaching Angular, from small components to full-stack MEAN apps. Each folder is a standalone project with its own `package.json`.

![Angular](https://img.shields.io/badge/Angular-11%E2%80%9314-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)

## Projects

### Full-stack (Angular + Node.js)

| Project | Description | Stack |
|---|---|---|
| [`mean-stack`](mean-stack) | MEAN application with JWT authentication | Angular 11, Angular Material, Express, MongoDB, JWT |
| [`task-manager`](task-manager) | Task manager with a separate API and front end | Angular 11, Express, Mongoose, JWT |
| [`ng-crud`](ng-crud) | CRUD app with its own Node back end (`CRUD-BE`) | Angular 14, Angular Material, Express, MongoDB |

### Angular apps

| Project | Description | Stack |
|---|---|---|
| [`ng-ecommerce`](ng-ecommerce) | E-commerce storefront | Angular 13, Bootstrap 5 |
| [`ng-ecommerce-admin`](ng-ecommerce-admin) | E-commerce admin panel | Angular 13, Bootstrap 4 |
| [`ng-exam`](ng-exam) | Online exam app with doctor and student roles, using a mock REST API | Angular 13, Angular Material, json-server |
| [`ng-api`](ng-api) | Consuming REST APIs with `HttpClient` | Angular 13 |
| [`ng-food`](ng-food) | Restaurant website with home, menu, about and contact pages | Angular 13 |
| [`ng-slider`](ng-slider) | Image slider component | Angular 13, Angular Material |
| [`ng-calculator`](ng-calculator) | Calculator | Angular 13 |
| [`ng-to-do-list`](ng-to-do-list) | To-do list with a mock API | Angular 11, json-server |

### Training

| Folder | Contents |
|---|---|
| [`angular`](angular) | Course project, events app and to-do exercises |
| [`training`](training) | To-do list exercises |
| [`training-projects`](training-projects) | News, restaurant, elections prediction and *Future Engineer* apps |
| [`test-files`](test-files) | TypeScript, Node.js and webpack experiments |

## Running a Project

```bash
git clone https://github.com/mostfaswaisi93/angular-tutorials.git
cd angular-tutorials/<project>
npm install
npm start          # or: ng serve
```

Projects that use `json-server` include a `db.json` file. Full-stack projects have their back end in a sub-folder (`backend`, `api` or `CRUD-BE`) with its own `npm install`.

## Author

**Mustafa T. Al-Swaisi** · [LinkedIn](https://www.linkedin.com/in/mostfaswaisi93/) · [GitHub](https://github.com/mostfaswaisi93)
