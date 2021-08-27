from threading import Event
from flask import Blueprint
from app.models import Project

project_routes = Blueprint("projects", __name__)

# get all projects:


@project_routes.route("/")
def projectsGet():
    projects = Project.query.all()
    return {"projects": [project.to_dict() for project in projects]}


# get one project
@project_routes.route("/<int:id>")
def projectOne(id):
    project = Project.query.filter_by(id=id).one()
    return {"projects": [project.to_dict()]}


# post project
@project_routes.route("/")
def projectPost():
    pass


# update project
@project_routes.route("/<int:id>")
def projectPut(id):
    pass


# delete project
@project_routes.route("/<id>")
def projectDelete(id):
    pass


# health
@project_routes.route("/health")
def health():
    return {"health": "OK"}
