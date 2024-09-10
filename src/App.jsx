import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import OutputProject from "./components/OutputProject";

function App() {
  const [project, setProject] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });
  const [selectedItems, setSelectedItems] = useState(null);

  function handleStartAddProject() {
    setSelectedItems(null)
    setProject(prevState => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleCancel() {
    setProject(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleAddProject(addProject) {
    setProject(prev => {
      const newProject = {
        ...addProject,
        id: Math.floor(Math.random()*1000), // Consider using a unique ID generator here
      };
      return {
        ...prev,
        projects: [...prev.projects, newProject],
        selectedProjectId: undefined,
      };
    });
    
  }

  function selectedItem(selectedItem) {
    setSelectedItems(selectedItem);
    console.log(selectedItem);
  }

  function subTasks(subtasks,id) {
    setProject(prev => ({
      ...prev,
      projects: prev.projects.map(proj =>
        proj.id === id ? { ...proj, subtasks } : proj
      ),
    }));
    console.log(project)
  }
  console.log(selectedItem);

  let content;
  if (project.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (project.selectedProjectId === null) {
    content = (
      <NewProject
        onStartAddProject={handleStartAddProject}
        cancel={handleCancel}
        handleAddProject={handleAddProject}
      />
    );
  } else {
    content = <OutputProject details={selectedItems} />;
  }
  if(selectedItems!=null)
  {
    content = <OutputProject details={selectedItems} handlingDelete={deleteItem} subTasks={subTasks}/>;
  }
  function deleteItem(itemId)
  {
    setSelectedItems(null)
    setProject(prev=>{
      const updatedProjects=prev.projects.filter(project=>project.id!==itemId);
      return{
        ...prev,projects:updatedProjects
      }
    })
  }

  console.log(project);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={project.projects}
        selection={selectedItem}
      />
      {content}
    </main>
  );
}

export default App;
