from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class ProjectForm(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    category = StringField("category")
    imgUrl = StringField("image", validators=[DataRequired()])
    userId = IntegerField("User ID", validators=[DataRequired()])
