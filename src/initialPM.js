import ProjectManager from './project-manager';
import Project from './project';
let pm = new ProjectManager();
if (pm.isEmpty()) {
  let proj1 = new Project('To do list');
  pm.addProject(proj1);
}
export default pm;
