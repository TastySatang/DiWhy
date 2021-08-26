from app.models import db, Project

def seed_projects():
    one = Project(
        title='Granma\'s favourite car!',
        category='',
        imgUrl = 'https://static.boredpanda.com/blog/wp-content/uploads/2018/02/0rDYRY3vezWwMCHUwu8v-zLG4ZX40MfMPsjdFJJh9zo-5a7d7bab1be4b__700.jpg',
        userId = 1,
        )

    db.session.add(one)
    db.session.commit()


def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
