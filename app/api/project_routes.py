from threading import Event
from flask import Blueprint, request
from app.models import db, Project, Step, Comment
from app.forms import ProjectForm

project_routes = Blueprint("projects", __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


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
@project_routes.route("/", methods=["POST"])
def projectPost():
    form = ProjectForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        project = Project(
            title=form.data["title"],
            category=form.data["category"],
            imgUrl=form.data["imgUrl"],
            userId=form.data["userId"],
        )
        db.session.add(project)
        db.session.commit()
        return {"projects": [project.to_dict()]}
    return {"errors": validation_errors_to_error_messages(form.erros)}, 401


# update project
@project_routes.route("/<int:id>")
def projectPut(id):
    form = ProjectForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        project = Project.query.filter(Project.id == id).first()
        form.populate_obj(project)
        db.session.add(project)
        db.session.commit()
        return {"projects": [project.to_dict()]}
    return {"errors": validation_errors_to_error_messages(form.erros)}, 401


# delete project
@project_routes.route("/<id>")
def projectDelete(id):
    project = Project.query.filter(Project.id == id).first()
    db.session.delete(project)
    db.session.commit()
    return {"projects": id}


# health
@project_routes.route("/health")
def health():
    return {"health": "OK"}
