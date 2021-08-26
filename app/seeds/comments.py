from app.models import db, Comment

def seed_comments():
    one = Comment(
        comment = 'first comment',
        userId = 1,
        projectId = 1
        )

    two = Comment(
        comment = 'second comment',
        userId = 2,
        projectId = 1
    )

    db.session.add(one)
    db.session.add(two)
    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
