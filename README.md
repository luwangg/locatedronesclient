# Locate Drone Position Assignment
Client for Project to manage application tracking drone current position.  
Drone can have name , id ,initial position.  
# Deployment :
git clone git@github.com:shivshankerjiit/locatedronesclient.git  
yarn install  
npm run dev-server  

# Local URL
http://localhost:8080/

# Home Page has links for :
Home : List all drones with curtrent position.  
       Current position is fetched from API developed.  
Add Drone : Adding new drone  
Edit Drone : Editing Drone  
List Drone : List all the drones, also shown inm Home page.  

# Assumption :
DroneLocatorAPI project running on : http://localhost:3000/ ,  
MongoDB server running on : Port : 27017