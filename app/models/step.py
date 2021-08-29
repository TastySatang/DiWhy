from .db import db


class Step(db.Model):
    __tablename__ = "steps"

    id = db.Column(db.Integer, primary_key=True)
    index = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String, nullable=False)
    instruction = db.Column(db.String, nullable=False)
    image = db.Column(db.String)
    projectId = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)

    project = db.relationship("Project", back_populates="steps")

    def to_dict(self):
        return {
            "id": self.id,
            "index": self.index,
            "instruction": self.instruction,
            "projectId": self.projectId,
            "title": self.title,
<<<<<<< HEAD
=======
            "image": self.image,
>>>>>>> main
        }
