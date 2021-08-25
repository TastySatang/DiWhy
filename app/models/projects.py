from .db import db

class Project(db.model):
    __tablename__ ='projects'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    category = db.Column(db.String)
    imgUrl = db.Column(db.String, nullable=False)
    userId = db.Column(db.Integer, nullable=False)
    # https://stackoverflow.com/questions/13370317/sqlalchemy-default-datetime/33532154#33532154
    createdAt = db.Column(db.DateTime(timezone=True), server_default=db.func.now())
    updatedAt = db.Column(db.DateTime(timezone=True), onupdate=db.func.now())

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
