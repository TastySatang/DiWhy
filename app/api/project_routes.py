from app.forms.step_form import StepForm
from threading import Event
from flask import Blueprint, request
from app.models import db, Project, Step, Comment
from app.forms import ProjectForm, StepForm, CommentForm

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


# health
@project_routes.route("/health")
def health():
    return {"health": "OK"}


# get all projects:
@project_routes.route("/")
def projectsGet():
    projects = Project.query.all()
    return {"projects": [project.to_dict() for project in projects]}


# get one project
@project_routes.route("/<int:id>/")
def projectOne(id):
    project = Project.query.filter_by(id == id).one()
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
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# update project
@project_routes.route("/<int:id>", methods=["PUT"])
def projectPut(id):
    form = ProjectForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        project = Project.query.filter(Project.id == id).first()
        form.populate_obj(project)
        db.session.add(project)
        db.session.commit()
        return {"projects": [project.to_dict()]}
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# delete project
@project_routes.route("/<int:id>", methods=["DELETE"])
def projectDelete(id):
    project = Project.query.filter(Project.id == id).first()
    db.session.delete(project)
    db.session.commit()
    return {"projects": id}


# posting steps
@project_routes.route("/steps", methods=["POST"])
def createStep():
    form = StepForm()
    form["csrf_token"].data = request.cookies["csrf_toekn"]

    if form.validate_on_submit():
        step = Step()
        form.populate_obj(step)
        db.session.add(step)
        db.session.commit()
        return step.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401
