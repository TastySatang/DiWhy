from ast import Str
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class CommentForm(FlaskForm):
    comment = StringField("comment", validators=[DataRequired()])
    userId = IntegerField("user ID", validators=[DataRequired()])
    projectId = IntegerField("project ID", validators=[DataRequired()])
