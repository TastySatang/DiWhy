from app.forms.step_form import StepForm
from threading import Event
from flask import Blueprint, request
from app.models import db, Project, Step, Comment, project
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


# Get All Projects:
@project_routes.route("/")
def projectsGet():
    projects = Project.query.all()
    return {"projects": [project.to_dict() for project in projects]}


# Get One Project
@project_routes.route("/<int:id>/")
def projectOne(id):
    project = Project.query.filter_by(id=id).one()
    return {"projects": [project.to_dict()]}


# Post Project
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


# Update Project
@project_routes.route("/<int:id>", methods=["PUT"])
def projectPut(id):
    project = Project.query.filter(Project.id == id).first()
    db.session.delete(project)
    db.session.commit()

    form = ProjectForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        project = Project(
            id=id,
            title=form.data["title"],
            category=form.data["category"],
            imgUrl=form.data["imgUrl"],
            userId=form.data["userId"],
        )
        db.session.add(project)
        db.session.commit()
        return {"projects": [project.to_dict()]}
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# Delete Project
@project_routes.route("/<int:id>", methods=["DELETE"])
def projectDelete(id):
    project = Project.query.filter(Project.id == id).first()
    db.session.delete(project)
    db.session.commit()
    return {"projects": id}


# Getting Steps
@project_routes.route("/<int:projectId>/steps")
def getStep(projectId):
    steps = Step.query.filter(Step.projectId == projectId).all()
    return {"steps": [step.to_dict() for step in steps]}


# Posting Step
@project_routes.route("/<int:projectId>/steps", methods=["POST"])
def createStep(projectId):
    form = StepForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    print("inside posting step", form.data["index"])
    if form.validate_on_submit():
        step = Step()
        form.populate_obj(step)
        db.session.add(step)
        db.session.commit()
        return step.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# Getting Comments
@project_routes.route("/<int:id>/comments")
def commentsGet(id):
    comments = Comment.query.filter(Comment.projectId == id).all()
    return {"comments": [comment.to_dict() for comment in comments]}


# Posting Comments
@project_routes.route("/<int:id>/comments", methods=["POST"])
def commentPost(id):
    form = CommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        newComment = Comment(
            comment=form.data["comment"], projectId=id, userId=form.data["user_id"]
        )

        db.session.add(newComment)
        db.session.commit()
        return {"comments": [newComment.to_dict()]}
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401
