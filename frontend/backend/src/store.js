//Handles CRUD of projects

//localStorage
const store = {
    createNewProject : function(model , projectName){
        //get projects
        let projectsList = JSON.parse(localStorage.getItem("backend_projectsList"));
        if(projectsList != null){
            projectsList.forEach(element => {
                if(element == projectName) throw new Error("Project name is already taken")
            });
        }else{
            projectsList = [];
            projectsList.push(projectName);
            localStorage.setItem("backend_projectsList" , JSON.stringify(projectsList))
        }
      
        localStorage.setItem(`backend_${projectName}` , JSON.stringify(model))
    }
}

export default store