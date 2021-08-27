from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class StepForm(FlaskForm):
    index = IntegerField("index", validators=[DataRequired()])
    instruction = StringField("instruction", validators=[DataRequired()])
    image = StringField("image")
    projectId = IntegerField("project ID", validators=[DataRequired()])
