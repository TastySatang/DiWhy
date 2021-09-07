from operator import index
from app.models import db, Step


def seed_steps():
    zero = Step(
        index=0,
        title="Intro + Supplies",
        instruction="This is how to make a great car seat your granma would definitely enjoy!",
        projectId=1,
    )
    one = Step(
        index=1,
        title="set up",
        instruction="Get it all floralled up!",
        projectId=1,
    )
    two = Step(
        index=2,
        instruction="Get more flowers!",
        title="pump and moisture sensor",
        image="https://i.pinimg.com/originals/22/2a/9a/222a9a7306d793d19217813adec32531.jpg",
        projectId=1,
    )

    n3 = Step(
        index=0,
        title="Intro + Supplies: sock cup",
        instruction="Do you want to get rid of bread-crumbs that you've sprinkled on your car's cupholder for some reason?\nYou need 1 Sock and 1 cup.",
        projectId=2,
        image="https://i.imgur.com/tWxPSRb.png",
    )
    n4 = Step(
        index=1,
        title="Step 1: Magic!",
        instruction="Instead of using vacuum or a sponge, wrap a sock around a cup! Socks have magic bread attracting properties and all the bread will stick to a sock.",
        projectId=2,
    )

    n5 = Step(
        index=0,
        title="Intro + Supplies: Lime Squeezing alternative!",
        instruction="Are you too WEAK to squeeze a LIME?",
        projectId=3,
    )
    n6 = Step(
        index=1,
        title="Step 1: Put lime in garlic press",
        instruction="Just put the thing in a garlic press.",
        projectId=3,
        image="https://i.imgur.com/u2tYLMG.png",
    )

    n7 = Step(
        index=0,
        title="Intro + Supplies: DO  you want a key with LIGHT on it?",
        instruction="Prepare:1 key,\n1 light,\n1 rubber thing",
        projectId=4,
        image="",
    )
    n8 = Step(
        index=1,
        title="Step 1: Make a key with a light on it",
        instruction="Stick a light to your key!\n(Glue works as well!)",
        projectId=4,
        image="https://i.imgur.com/84KAKO1.png",
    )

    n9 = Step(
        index=0,
        instruction="Are you tired of having large napkins?\ngrab a kitchen knife, and we'll go through how to make it into a modern utility piece!\nA perfect accessory for any couple who want to blow their nose together but doesn't want to risk touching hands.\nYou will need:\n1 Sharp Kitchen Knife,\n1 Box of Napkins\n1 Box cutter",
        image="",
        projectId=5,
        title="Intro + Supplies: How to make a smaller napkin",
    )
    n10 = Step(
        index=1,
        instruction="Pull out the napkins from the box, slice them in half with the sharp kitchen knife that you that I've told you to get.",
        image="https://i.imgur.com/Rs0NIDV.png",
        projectId=5,
        title="Step 1: Cut Napkins in half",
    )
    n11 = Step(
        index=2,
        instruction="Put the already cut napkins back into the box that you pulled it out from.",
        image="https://i.imgur.com/Z6NWPd4.png",
        projectId=5,
        title="Step 2: Put napkins back into the box",
    )
    n12 = Step(
        index=3,
        instruction="very carefully cut open the each side of the opening, and you're done!",
        image="https://i.imgur.com/dKWinzV.png",
        projectId=5,
        title="Step 3: Open holes to pull napkins from",
    )

    n13 = Step(
        index=0,
        instruction="Do you want to put glasses on top of your head, but the top of your head is too far away? and the thought of your glasses being so far away is giving you separation anxiety?",
        image="",
        projectId=6,
        title="Intro + Supplies: Head-Glass-Holder",
    )
    n14 = Step(
        index=1,
        instruction="ATTACH A HOOK TO YOUR FACE",
        image="https://i.imgur.com/I7H2Hml.png",
        projectId=6,
        title="Step 1: GLUE TO FOREHEAD",
    )

    n15 = Step(
        index=0,
        instruction="Do you HATE the idea of baking something that doesn't have holes in it as much as me?",
        image="",
        projectId=7,
        title="Intro + Supplies: bake-can",
    )
    n16 = Step(
        index=1,
        instruction="Put an empty can inside a baking pan",
        image="https://i.imgur.com/tPJOmNd.png",
        projectId=7,
        title="Step 1: Putting can inside baking pan",
    )
    n17 = Step(
        index=2,
        instruction="Pour them in",
        image="https://i.imgur.com/80Lt25M.png",
        projectId=7,
        title="Step 2: Pouring dough inside the baking pan",
    )
    n18 = Step(
        index=3,
        instruction="now your baking things have holes in them.",
        image="https://i.imgur.com/GMc2ihL.png",
        projectId=7,
        title="Step 3: Bake",
    )

    n19 = Step(
        index=0,
        instruction="Is there a hole in something that you don't want holes in?\nget: \n- Any food item\n- Gluen\n- Sandpaper\n- Paint to match whatever you are filling the hole in",
        image="",
        projectId=8,
        title="Intro + Supplies: No more holes!",
    )
    n20 = Step(
        index=1,
        instruction="This is the important part. It HAS TO BE a food item, or this instruction will not work for you, as it focuses on using FOOD ITEMS as the hole filling material.\nWhenever you're ready, put the said food item (I prefer ramen so that it becomes a delicious treat when it gets wet by accident) inside the hole and make it stay in place with glue.\nAny glue will do, the point isn't to make this durable.",
        image="https://i.imgur.com/h7FqogP.png",
        projectId=8,
        title="Step 1: putting food items inside the holes",
    )
    n21 = Step(
        index=2,
        instruction="Sand the glue-ramen down so to a point where it will fit seamlessly.",
        image="https://i.imgur.com/oR1WWHK.png",
        projectId=8,
        title="Step 2: Sanding",
    )
    n22 = Step(
        index=3,
        instruction="When you're at this stage, just paint it the color that matches the thing you're fixing, and you're done!",
        image="https://i.imgur.com/Pv2ukHy.png",
        projectId=8,
        title="Step 3: Paint",
    )

    n23 = Step(
        index=0,
        instruction="Are you embarrassed of your small, disgusting stain on your cool shoes?\nOh no! what can we possibly do?",
        image="https://i.imgur.com/wmYEgbq.png",
        projectId=9,
        title="Intro + Supplies: Cleaning your dirty shoes",
    )
    n24 = Step(
        index=1,
        instruction="we're going to glue LEGOS to it!",
        image="https://i.imgur.com/OEpDpyZ.png",
        projectId=9,
        title="Step 1: Only solution!",
    )
    n25 = Step(
        index=2,
        instruction="This is significantly less embarrassing now!",
        image="https://i.imgur.com/WsGiITp.png",
        projectId=9,
        title="Step 2: Wow!",
    )

    n26 = Step(
        index=0,
        instruction="Have you never hammered a nail, and you don't know to hold the base of the nail?",
        image="",
        projectId=10,
        title="Intro + Supplies: nailing?",
    )
    n27 = Step(
        index=1,
        instruction="Try using a cork that won't come out for some reason!",
        image="https://i.imgur.com/4Qrkh3j.png",
        projectId=10,
        title="Step 1: Cork!",
    )

    n28 = Step(
        index=0,
        instruction="You will need: \n1x Baking sheet\n1x Normal sized toothpaste\n1x Baking soda\n1x Cool bottle with cork cap",
        image="",
        projectId=11,
        title="Intro + Supplies: Portable Toothpaste",
    )
    n29 = Step(
        index=1,
        instruction="Prepare a sheet with little globs of toothpaste on it",
        image="https://i.imgur.com/B6McXA9.png",
        projectId=11,
        title="Step 1: Toothpaste + Sheet",
    )
    n30 = Step(
        index=2,
        instruction="Cover the made globs in baking soda, this will prevent the globs from sticking to each other.",
        image="https://i.imgur.com/Wsa86VA.png",
        projectId=11,
        title="Step 2: Baking Soda",
    )
    n31 = Step(
        index=3,
        instruction="Put the baking soda covered toothpaste globs inside the little jar!",
        image="https://i.imgur.com/3WiDysW.png",
        projectId=11,
        title="Step 3: Cool bottle",
    )
    n32 = Step(
        index=4,
        instruction="Now you can take that little jar of baking soda covered toothpaste anywhere you want! You can now brush your teeth on-the-go!",
        image="https://i.imgur.com/BR4PPhp.png",
        projectId=11,
        title="Step 4: Go out!",
    )

    n33 = Step(
        index=0,
        instruction="That you can put a food inside an ice cube tray, and make the food the SHAPE of an ice cube tray?",
        image="",
        projectId=12,
        title="Did you now?",
    )

    n34 = Step(
        index=0,
        instruction="you can put a food inside an ice cube tray, to make the food the shape of the ice cube tray?",
        image="",
        projectId=13,
        title="But did you know?",
    )

    n35 = Step(
        index=0,
        instruction="You can put food in an ice cube tray, to make the food the shape of the ice cube tray?",
        image="",
        projectId=14,
        title="But did you know?",
    )

    n36 = Step(
        index=0,
        instruction="did you know you can put food in an ice cube tray, to make the food the shape of an ice cube?",
        image="https://i.imgur.com/LRCqnaT.png",
        projectId=15,
        title="Intro + Supplies: ice cube tray",
    )
    n37 = Step(
        index=1,
        instruction="Well then obviously, you take it OUT of the ice cube tray, and flatten it!\nNo! there are no redundant steps here!",
        image="https://i.imgur.com/tYzWych.png",
        projectId=15,
        title="Step 1: But I don't want my food in the shape of an ice cube tray!",
    )

    n38 = Step(
        index=0,
        instruction="Prepare herbs, olive oil and ice cube tray.",
        image="",
        projectId=16,
        title="Intro + Supplies: pre-cooking ice cubes",
    )
    n39 = Step(
        index=1,
        instruction="Chop up the herbs and place them inside the ice cube tray.",
        image="https://i.imgur.com/beLM99B.png",
        projectId=16,
        title="Step 1: Herb goes first",
    )
    n40 = Step(
        index=2,
        instruction="Fill in the ice cube tray with herbs in it with some olive oil",
        image="https://i.imgur.com/6wuCxJJ.png",
        projectId=16,
        title="Step 2: Put olive oil in",
    )
    n41 = Step(
        index=3,
        instruction="Put it in the freezer until it freezes. Make sure it's solid enough to be pulled out with your bare fingers",
        image="https://i.imgur.com/nTIraAQ.png",
        projectId=16,
        title="Step 3: Freeze",
    )
    n42 = Step(
        index=4,
        instruction="Now you can use one of the cubes to INSTANTLY put herbs and olive oil into your pan!\nFreeing you of the need to put herbs and olive oil in your pan.",
        image="https://i.imgur.com/tuqjggr.png",
        projectId=16,
        title="Step 4: Done!",
    )

    n43 = Step(
        index=0,
        instruction="Are you trying to go through life without germs on your hands?\nIts a relevant thing to worry about now!",
        image="https://i.imgur.com/2KewH9j.png",
        projectId=17,
        title="Intro + Supplies: Convenient hand sanitizer!",
    )
    n44 = Step(
        index=1,
        instruction="Just carry two plastic bags of them on your belt!\nNow you won't have to haul around your sanitization silo!",
        image="https://i.imgur.com/MRAiKqO.png",
        projectId=17,
        title="Step 1: Portable",
    )
    n45 = Step(
        index=2,
        instruction="Don't shake your hands with anyone.\nEven if they are your friends.",
        image="https://i.imgur.com/yXjTCOE.png",
        projectId=17,
        title="Step 2: Avoid hand shaking",
    )
    n46 = Step(
        index=3,
        instruction="Use the *Handy* mannequin hand instead!",
        image="https://i.imgur.com/njPJkut.png",
        projectId=17,
        title="Step 3: Can't say no?",
    )

    n47 = Step(
        index=0,
        instruction="Are you worried you will lose your phone or remote at home again?\nyou will need:\na glue gun,\nlong piece of fabric,\n",
        image="",
        projectId=18,
        title="Intro + Supplies: Head-glue",
    )
    n48 = Step(
        index=1,
        instruction="put glue on your fabric",
        image="https://i.imgur.com/HE1xEDy.png",
        projectId=18,
        title="Step 1: Glue things onto fabric",
    )
    n49 = Step(
        index=2,
        instruction="glue your remote and phone onto the fabric",
        image="https://i.imgur.com/J4S1ZA9.png",
        projectId=18,
        title="Step 2: Strap your things",
    )
    n50 = Step(
        index=3,
        instruction="put them on your head",
        image="https://i.imgur.com/frfvLEX.png",
        projectId=18,
        title="Step 3: Don't ever forget",
    )

    n51 = Step(
        index=0,
        instruction="Do you like eating chicken wings at work but tired of getting grease stains on your papers?\nDon't like to wash hands?\nThere is a simpler solution!",
        image="https://i.imgur.com/HFvGiSm.png",
        projectId=19,
        title="Intro + Supplies: sauce at work",
    )
    n52 = Step(
        index=1,
        instruction="Try eating your chicken wings with a clothe peg!",
        image="https://i.imgur.com/v5WKzz1.png",
        projectId=19,
        title="Step 1: Clothe peg",
    )

    n53 = Step(
        index=0,
        instruction="Is brushing your teeth taking TOO long?",
        image="https://i.imgur.com/LkIyzhQ.png",
        projectId=20,
        title="Intro + Supplies: slow brushing?",
    )
    n54 = Step(
        index=1,
        instruction="Try jamming FOUR toothbrushes in there",
        image="https://i.imgur.com/tPf0A4j.png",
        projectId=20,
        title="Step 1: 4x faster",
    )

    n55 = Step(
        index=0,
        instruction="Do you need a new cheese grater? but don't want to SPLASH out on one of those EXPENSIVE store bought ones?",
        image="https://i.imgur.com/hwLilT0.png",
        projectId=21,
        title="Intro + Supplies: Toooo expensive!",
    )
    n56 = Step(
        index=1,
        instruction="Why not put some holes in some drink's can?\nThese won't leave shards of metal in your food. Don't worry!",
        image="https://i.imgur.com/P7Mmr9w.png",
        projectId=21,
        title="Step 1: Holes in cans",
    )

    n57 = Step(
        index=0,
        instruction="Are you tired of hurting your feet after accidently stepping on your child's toys?",
        image="",
        projectId=22,
        title="Intro + Supplies: Avoid hurting yourself",
    )
    n58 = Step(
        index=1,
        instruction="Wear something on your feet",
        image="https://i.imgur.com/SS1fFwF.png",
        projectId=22,
        title="Step 1: Protection",
    )

    n59 = Step(
        index=0,
        instruction="Are you not motivated to work hard enough?\nHere's a tip on how to boost your productivity!",
        image="",
        projectId=23,
        title="Intro + Supplies: Improve worker morals!",
    )
    n60 = Step(
        index=1,
        instruction="Fire has been scientifically proven to release adrenalin in your adrenal glands, which causes you to perform faster!",
        image="https://i.imgur.com/WqGyxNQ.png",
        projectId=23,
        title="Step 1: Set a fire to your office chair",
    )

    db.session.add(zero)
    db.session.add(one)
    db.session.add(two)
    db.session.add(n3)
    db.session.add(n4)
    db.session.add(n5)
    db.session.add(n6)
    db.session.add(n7)
    db.session.add(n8)
    db.session.add(n9)
    db.session.add(n10)
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
    db.session.add(n24)
    db.session.add(n25)
    db.session.add(n26)
    db.session.add(n27)
    db.session.add(n28)
    db.session.add(n29)
    db.session.add(n30)
    db.session.add(n31)
    db.session.add(n32)
    db.session.add(n33)
    db.session.add(n34)
    db.session.add(n35)
    db.session.add(n36)
    db.session.add(n37)
    db.session.add(n38)
    db.session.add(n39)
    db.session.add(n40)
    db.session.add(n41)
    db.session.add(n42)
    db.session.add(n43)
    db.session.add(n44)
    db.session.add(n45)
    db.session.add(n46)
    db.session.add(n47)
    db.session.add(n48)
    db.session.add(n49)
    db.session.add(n50)
    db.session.add(n51)
    db.session.add(n52)
    db.session.add(n53)
    db.session.add(n54)
    db.session.add(n55)
    db.session.add(n56)
    db.session.add(n57)
    db.session.add(n58)
    db.session.add(n59)
    db.session.add(n60)

    db.session.commit()


def undo_steps():
    db.session.execute("TRUNCATE steps RESTART IDENTITY CASCADE;")
    db.session.commit()
