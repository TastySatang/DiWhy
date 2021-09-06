from app.models import db, Project


def seed_projects():
    one = Project(
        title="Granma's favourite car!",
        category="",
        imgUrl="https://static.boredpanda.com/blog/wp-content/uploads/2018/02/0rDYRY3vezWwMCHUwu8v-zLG4ZX40MfMPsjdFJJh9zo-5a7d7bab1be4b__700.jpg",
        userId=1,
    )
    two = Project(
        title="Removing bread-crumbs from cup-holdeders",
        category="",
        imgUrl="https://static.boredpanda.com/blog/wp-content/uploads/2018/02/0rDYRY3vezWwMCHUwu8v-zLG4ZX40MfMPsjdFJJh9zo-5a7d7bab1be4b__700.jpg",
        userId=1,
    )
    three = Project(
        title="Granma's favourite car!",
        category="",
        imgUrl="https://static.boredpanda.com/blog/wp-content/uploads/2018/02/0rDYRY3vezWwMCHUwu8v-zLG4ZX40MfMPsjdFJJh9zo-5a7d7bab1be4b__700.jpg",
        userId=1,
    )
    four = Project(
        title="Granma's favourite car!",
        category="",
        imgUrl="https://static.boredpanda.com/blog/wp-content/uploads/2018/02/0rDYRY3vezWwMCHUwu8v-zLG4ZX40MfMPsjdFJJh9zo-5a7d7bab1be4b__700.jpg",
        userId=1,
    )
    five = Project(
        title="Granma's favourite car!",
        category="",
        imgUrl="https://static.boredpanda.com/blog/wp-content/uploads/2018/02/0rDYRY3vezWwMCHUwu8v-zLG4ZX40MfMPsjdFJJh9zo-5a7d7bab1be4b__700.jpg",
        userId=1,
    )
    six = Project(
        title="Granma's favourite car!",
        category="",
        imgUrl="https://static.boredpanda.com/blog/wp-content/uploads/2018/02/0rDYRY3vezWwMCHUwu8v-zLG4ZX40MfMPsjdFJJh9zo-5a7d7bab1be4b__700.jpg",
        userId=1,
    )
    seven = Project(
        title="Granma's favourite car!",
        category="",
        imgUrl="https://static.boredpanda.com/blog/wp-content/uploads/2018/02/0rDYRY3vezWwMCHUwu8v-zLG4ZX40MfMPsjdFJJh9zo-5a7d7bab1be4b__700.jpg",
        userId=1,
    )
    eight = Project(
        title="Granma's favourite car!",
        category="",
        imgUrl="https://static.boredpanda.com/blog/wp-content/uploads/2018/02/0rDYRY3vezWwMCHUwu8v-zLG4ZX40MfMPsjdFJJh9zo-5a7d7bab1be4b__700.jpg",
        userId=1,
    )
    nine = Project(
        title="Granma's favourite car!",
        category="",
        imgUrl="https://static.boredpanda.com/blog/wp-content/uploads/2018/02/0rDYRY3vezWwMCHUwu8v-zLG4ZX40MfMPsjdFJJh9zo-5a7d7bab1be4b__700.jpg",
        userId=1,
    )
    ten = Project(
        title="Granma's favourite car!",
        category="",
        imgUrl="https://static.boredpanda.com/blog/wp-content/uploads/2018/02/0rDYRY3vezWwMCHUwu8v-zLG4ZX40MfMPsjdFJJh9zo-5a7d7bab1be4b__700.jpg",
        userId=1,
    )

    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(six)
    db.session.add(seven)
    db.session.add(eight)
    db.session.add(nine)
    db.session.add(ten)
    db.session.commit()


def undo_projects():
    db.session.execute("TRUNCATE projects RESTART IDENTITY CASCADE;")
    db.session.commit()
