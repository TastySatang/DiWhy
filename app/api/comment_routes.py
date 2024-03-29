from app.forms import CommentForm
from flask import Blueprint, request
from app.models import db, Comment

comment_routes = Blueprint("comments", __name__)

# Edit comment
@comment_routes.route("/<int:id>", methods=["PUT"])
def commentPost(id):
    form = CommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    print("please print ")
    if form.validate_on_submit():
        comment = Comment.query.filter(Comment.id == id).first()
        form.populate_obj(comment)
        db.session.add(comment)
        db.session.commit()
        return {"comments": [comment.to_dict()]}
    return {"errors": [form.errors]}


# Delete comment
@comment_routes.route("/<int:id>", methods=["DELETE"])
def commentDelete(id):
    comment = Comment.query.filter(Comment.id == id).first()
    print("inside delete comment", id, comment)
    if comment:
        db.session.delete(comment)
        db.session.commit()
        return {"comments": id}
    return {"errors": ["Comment could not be found"]}


@comment_routes.route("/health")
def events():
    return {"message": "set up correctly"}
