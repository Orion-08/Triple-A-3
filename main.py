from datetime import date
from flask.templating import render_template
import requests
from flask import Flask

app = Flask(__name__)

data = {}


def create_random_user():
    url = "https://randomuser.me/api/"

    res = requests.get(url)

    data = res.json()

    name = data["results"][0]["name"]["first"] + \
        " "+data["results"][0]["name"]["last"]
    gender = data["results"][0]["gender"]
    street = data["results"][0]["location"]["street"]
    city = data["results"][0]["location"]["city"]
    state = data["results"][0]["location"]["state"]
    email = data["results"][0]["email"]
    username = data["results"][0]["login"]["username"]
    password = data["results"][0]["login"]["password"]
    date = data["results"][0]["dob"]["date"]
    age = data["results"][0]["dob"]["age"]
    phone = data["results"][0]["phone"]
    img = data["results"][0]["picture"]["large"]
    data["gender"] = gender
    data["name"] = name
    data["street"] = street
    data["city"] = city
    data["state"] = state
    data["email"] = email
    data["username"] = username
    data["password"] = password
    data["date"] = date
    data["age"] = age
    data["phone"] = phone
    data["img"] = img
    return data


# print(name)


@app.route("/")
def home():
    data = create_random_user()
    name = data["name"]
    gender = data["gender"].title()
    streetno = data["street"]["number"]
    city = data["city"]
    state = data["state"]
    email = data["email"]
    username = data["username"]
    password = data["password"]
    date = data["date"][:10]
    age = data["age"]
    phone = data["phone"]
    img = data["img"]

    return render_template("index.html", name=name, gender=gender, streetno=streetno, city=city, state=state, email=email, username=username, password=password, date=date, age=age, phone=phone, img=img)


app.run(debug=True)
