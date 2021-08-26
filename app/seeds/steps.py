from app.models import db, Step

def seed_steps():
    one = Step(
        index = 1,
        instruction= 'Get it all floralled up!',
        projectId = 1,
        )

    two = Step(
        index = 2,
        instruction  = 'Get more flowers!',
        image = 'https://i.pinimg.com/originals/22/2a/9a/222a9a7306d793d19217813adec32531.jpg',
        projectId = 1,
    )

    db.session.add(one)
    db.session.add(two)
    db.session.commit()


def undo_steps():
    db.session.execute('TRUNCATE steps RESTART IDENTITY CASCADE;')
    db.session.commit()
