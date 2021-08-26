from .db import db
from sqlalchemy.sql import func

class Comment(db.model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    projectId = db.Column(db.Intger, db.ForeignKey('projects.id', nullable=False))
    createdAt = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updatedAt = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship('User', back_populates='comments')
    project = db.relationship('Project', backpopulates='comments')

    def to_dict(self):
      return {
        'id': self.id,
        'comment': self.comment,
        'userId': self.userId,
        'projectId': self.projectId,
        'createdAt': self.createdAt,
        'updatedAt': self.updatedAt,
      }
