<div align="center">
<h1>MERN Authentication/Authorization</h1>
<i>:closed_lock_with_key: MERN authentication & authorization flow using a simple TODO app!</i>
</div>

## Using Application

### Prerequisites

1. Clone this repository.
   ```shell
   git clone https://github.com/ABSphreak/mern-auth.git
   ```
2. Install all the dependencies in `root` & `client` folder.
   ```shell
   npm install
   cd client
   npm install
   ```
3. Create a `.env` in `root` folder.<br/>
   These environment variables are required:
   - `PORT` → Mention a custom port for running the Express server (default is 5000).
   - `MONGO_URI` → Put your MONGO_DB connection string here.
   - `JWT_SECRET` → Put anything you like, it will be used for `auth_token` validation.<br/>
   - Format:
     ```shell
     PORT=6969
     MONGO_URI=mongodb+srv://<user>:<pwd>@<cluster>-onltw.mongodb.net/<collection_name>?retryWrites=true&w=majority
     JWT_SECRET=RandomTextString
     ```

### Scripts Available

#### ⫸ `root` (backend)

1. `npm run dev` → Runs the server in development mode.</br>
   _(Highly recommended if you want to tweak API)_
   - Uses `nodemon` to monitor changes to the API.
   - Uses `morgan` to log the request data.
2. `npm start` → Runs the server in production mode.</br>
   _(Mostly going to be used for deployment to cloud)_

#### ⫸ `client` (frontend)

1. `npm start` → Invokes `react-scripts start`.
2. `npm build` → Invokes `react-scripts build`.
3. `npm test` → Invokes `react-scripts test`.
4. `npm eject` → Invokes `react-scripts eject`.

### Branches

For now there are two ongoing branches:

1. `master` → Has the Bootstrap based client application.
2. `material-ui` → Has MaterialUI based client application.

More info coming soon!
