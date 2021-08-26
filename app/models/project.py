from .db import db
from sqlalchemy.sql import func

class Project(db.model):
    __tablename__ ='projects'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    category = db.Column(db.String)
    imgUrl = db.Column(db.String, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    # https://stackoverflow.com/questions/13370317/sqlalchemy-default-datetime/33532154#33532154
    createdAt = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updatedAt = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="projects")
    comments = db.relationship("Comment", back_populates='project', cascade='delete')
    steps = db.relationship("Step", back_populates='project', cascade='delete')

    def to_dict(self):
      return {
        'id': self.id,
        'title': self.title,
        'category': self.category,
        'imgUrl': self.imgUrl,
        'userId': self.userId,
        'createdAt': self.createdAt,
        'updatedAt': self.updatedAt,
      }
