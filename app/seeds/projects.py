from app.models import db, Project


def seed_projects():
    one = Project(
        title="Granma's favourite car!",
        category="",
        imgUrl="https://static.boredpanda.com/blog/wp-content/uploads/2018/02/0rDYRY3vezWwMCHUwu8v-zLG4ZX40MfMPsjdFJJh9zo-5a7d7bab1be4b__700.jpg",
        userId=1,
    )
    two = Project(
        title="Removing bread-crumbs from cup-holders",
        category="Life Hacks",
        imgUrl="https://i.imgur.com/rDklcjk.png",
        userId=1,
    )
    three = Project(
        title="How to squeeze lime easily!",
        category="Food",
        imgUrl="https://i.imgur.com/43lYgFp.png",
        userId=1,
    )
    four = Project(
        title="Key with light on it",
        category="Life Hacks",
        imgUrl="https://i.imgur.com/NnWpKpc.png",
        userId=1,
    )
    five = Project(
        title="Smaller Napkins, Double Sided Pull",
        category="Life Hacks",
        imgUrl="https://i.imgur.com/ILUQkB7.png",
        userId=1,
    )
    six = Project(
        title="Not too far away glasses.",
        category="Life Hacks",
        imgUrl="https://i.imgur.com/YecR3qg.png",
        userId=1,
    )
    seven = Project(
        title="Hole Baker!",
        category="Food",
        imgUrl="https://i.imgur.com/MbHCuSt.png",
        userId=1,
    )
    eight = Project(
        title="How to fill a hole using food",
        category="Life Hacks",
        imgUrl="https://i.imgur.com/Ia3Nq3d.png",
        userId=1,
    )
    nine = Project(
        title="Get rid of shoe stains",
        category="Fashion",
        imgUrl="https://i.imgur.com/4BEuoHX.png",
        userId=1,
    )
    ten = Project(
        title="How to hammer in a nail",
        category="Life Hacks",
        imgUrl="https://i.imgur.com/HXYhliJ.png",
        userId=1,
    )
    n11 = Project(
        title="Portable Toothpaste",
        category="Life Hacks",
        imgUrl="https://i.imgur.com/Wyw7VM8.png",
        userId=1,
    )
    n12 = Project(
        title="Icecube tray",
        category="Food",
        imgUrl="https://i.imgur.com/zOWlEcL.png",
        userId=1,
    )
    n13 = Project(
        title="Ice cube tray - chocolate",
        category="Food",
        imgUrl="https://i.imgur.com/LVyU3i8.png",
        userId=1,
    )
    n14 = Project(
        title="Ice cube tray - bacon",
        category="Food",
        imgUrl="https://i.imgur.com/Z6ozdhJ.png",
        userId=1,
    )
    n15 = Project(
        title="Ice cube tray - cookies",
        category="Food",
        imgUrl="https://i.imgur.com/DGSFZOu.png",
        userId=1,
    )
    n16 = Project(
        title="Ice cube tray - automation",
        category="Food",
        imgUrl="https://i.imgur.com/Y9BhOEv.png",
        userId=1,
    )
    n17 = Project(
        title="Sanitized Hands",
        category="Life Hacks",
        imgUrl="https://i.imgur.com/d6K8SXD.png",
        userId=1,
    )
    n18 = Project(
        title="Never lose your phone/remote ever again",
        category="Life Hacks",
        imgUrl="https://i.imgur.com/Xk8OOVf.png",
        userId=1,
    )
    n19 = Project(
        title="How to eat chicken wings at work",
        category="Life Hacks",
        imgUrl="https://i.imgur.com/a1lvMVX.png",
        userId=1,
    )
    n20 = Project(
        title="How to brush your teeth four times faster",
        category="Life Hacks",
        imgUrl="https://i.imgur.com/M6wckQI.png",
        userId=1,
    )
    n21 = Project(
        title="Affordable cheese grater",
        category="Food",
        imgUrl="https://i.imgur.com/MNXP6Cu.png",
        userId=1,
    )
    n22 = Project(
        title="How to not hurt your feet stepping on legos",
        category="Life Hacks",
        imgUrl="https://i.imgur.com/Fz5kKuB.png",
        userId=1,
    )
    n23 = Project(
        title="Improve Productivity",
        category="Life Hacks",
        imgUrl="https://i.imgur.com/EWA99rf.png",
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
    db.session.add(n11)
    db.session.add(n12)
    db.session.add(n13)
    db.session.add(n14)
    db.session.add(n15)
    db.session.add(n16)
    db.session.add(n17)
    db.session.add(n18)
    db.session.add(n19)
    db.session.add(n20)
    db.session.add(n21)
    db.session.add(n22)
    db.session.add(n23)
    db.session.commit()


def undo_projects():
    db.session.execute("TRUNCATE projects RESTART IDENTITY CASCADE;")
    db.session.commit()
