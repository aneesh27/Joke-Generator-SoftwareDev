# funny haha maker
**Aplication Description**

This application utilizes the joke APIs icanhazdadjoke, YOMOMMA, Blauge.xyz, Geek Jokes, and Bread Puns in order to provide swift access to hilarious jokes. Each user can create their own personal account, including the ability to set up a profile picture! Users can generate as many jokes as they want from the mentioned APIs 15 jokes at a time! These jokes are then displayed in an easy-to-read format that features a save function with each joke. Every single joke that is generated can be saved to a user’s account, which they can then view later under the saved page. Once a user has gotten all the laughs they can out of a joke, they can unsave jokes that they have previously saved. If in the future the joke once again tickles the funny bone, it can be resaved. Saved jokes are unique to each user, and several users can save and unsave the same jokes as much as they see fit. If a user no longer fancies their username, profile picture, or password, all of these can be edited within the profile page. With the easy-to-use navigation bar, feel free to peruse the application!

**Team Members: (Name, Github Username, Email)**
- Alexander Juenemann, axjuenemann, alexander.juenemann@colorado.edu
- Aneesh Kaushik, aneesh27, anka9751@colorado.edu
- Faez Alanazi, omgfayez, Faez.Alanazi@colorado.edu 
- Lindsey Trussell, lindsey-trussell, lindsey.trussell@colorado.edu 
- Solus Thompson, Solus5, solus.thompson@colorado.edu
- Travis Johnson, tjohnson23, trjo4692@colorado.edu 

**Technology Stack**
- VCS Repository: GitHub
- Database: PostgreSQL
- Container Control: Docker 
- Application Server: NodeJS
- External APIs:
  - icanhazdadjoke
  - YOMOMMA API
  - Blauge.xyz
  - Geek Joke API
  - Bread Puns API (purged by Heroku, no longer functions)
- Testing Tool: Chai, Mocha
- Deployment Environment: LocalHost and Class Environment
- UI Tools: HTML, EJS

**Prerequisites for Running Application**
- Have Docker installed
- Search engine (i.e. Chrome, Microsoft Edge, etc...)

**Guide for Running Application**
1. Either download the respository and unzip the files, or clone the repository
   - The repository can be downloaded by clicking the green **Code** button and then pressing download zip
   - The repository can be cloned using the following command: `git clone https://github.com/CSCI3308-Fall22/CSCI-3308_Group_Project_Team_015-01.git`
2. Navigate to the Project code directory using `cd` commands in your terminal
3. Open the file docker-compose.yaml and ensure line 21 reads "- '3000:3000'" so the application can be deployed locally (the .yaml file may instead read "- ':3000'", which may cause crashing if deployed locally)
3. Boot up Docker
4. In terminal run `docker compose up`
5. Navigate in a search engine to [this localhost page](http://localhost:3000/) (http://localhost:3000/)
6. To shutdown the website, run `docker compose down` in your terminal
7. If you want to clear the databases of their stored information, run `docker compose down --volumes` in your terminal 

**Guide for Running Tests**
This needs to be filled in
1. Navigate to Tests/src using cd commands
2. Ensure that there is no "node_modules" file. If there is, delete it
3. Run "npm install" command in terminal
4. Run "npm run test" command in terminal

**Deployed Application**
Due to issues pertaining to the CU deployment environment provided in class, the application is not deployed (as instructed by TA)
