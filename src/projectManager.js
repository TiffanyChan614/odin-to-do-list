class ProjectManager {
  constructor(projects) {
    if (arguments.length === 0) {
      this.projects = [];
    } else {
      this.projects = projects;
    }
  }

  isEmpty = () => {
    if (this.projects.length === 0) return true;
    return false;
  };

  addProject = (project) => {
    this.projects.push(project);
  };

  removeProject = (project) => {
    if (this.isEmpty()) return;
    for (let p of this.projects) {
      if (project.equals(p)) {
        this.projects = this.projects.filter((p) => !project.equals(p));
      }
    }
  };

  getProject = (project) => {
    if (this.isEmpty()) return null;
    for (let p of this.projects) {
      if (project.equals(p)) {
        return p;
      }
    }
    return null;
  };

  toString = () => {
    let out = "";
    for (let project of this.projects) {
      out += project.toString() + "\n";
    }
    return out;
  };
}

export default ProjectManager;
